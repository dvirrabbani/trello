import { useState } from "react"
import { updateCurrentBoard } from "../../store/board.actions"
import { utilService } from "../../services/util.service"
import SvgIcon from "../SvgIcon"
import { AddItemForm } from "../AddItemForm"
import { GroupPreview } from "./GroupPreview"
import { activityService } from "../../services/acitivity.service"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { de } from "date-fns/locale"

export function GroupList({ groups }) {
  const [displayAddItem, setDisplayAddItem] = useState(false)

  function onDragEnd(result) {
    const { destination, source, draggableId, type } = result

    // dropped outside the list
    if (!destination) return
    // dropped in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return

    if (type === "board") {
      const newGroups = Array.from(groups)
      const [reorderedGroup] = newGroups.splice(source.index, 1)
      newGroups.splice(destination.index, 0, reorderedGroup)
      updateCurrentBoard(null, null, {
        key: "groups",
        value: newGroups,
      })
      return
    }

    const startGroup = groups.find((group) => group.id === source.droppableId)
    const endGroup = groups.find(
      (group) => group.id === destination.droppableId
    )
    const taskToMove = {
      ...startGroup.tasks.find((task) => task.id === draggableId),
    }

    if (startGroup === endGroup) {
      const newTaskIds = Array.from(startGroup.tasks)
      const [reorderedTasks] = newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, reorderedTasks)
      updateCurrentBoard(startGroup.id, null, {
        key: "tasks",
        value: newTaskIds,
      })
      return
    }

    //moving from one list to another
    const startTaskIds = Array.from(startGroup.tasks)
    startTaskIds.splice(source.index, 1)
    const updateStartGroup = { ...startGroup, tasks: startTaskIds }

    const endTaskIds = Array.from(endGroup.tasks)
    endTaskIds.splice(destination.index, 0, taskToMove)
    const updateEndGroup = { ...endGroup, tasks: endTaskIds }

    const updateGroups = groups.map((group) => {
      if (group.id === startGroup.id) return updateStartGroup
      if (group.id === endGroup.id) return updateEndGroup
      return group
    })

    updateCurrentBoard(null, null, {
      key: "groups",
      value: updateGroups,
    })
  }

  function onAddGroup(inputVal) {
    const group = {
      archivedAt: null,
      id: `g${utilService.makeId()}`,
      style: {},
      tasks: [],
      title: inputVal,
    }
    const updateGroups = [...groups, group]
    updateCurrentBoard(
      null,
      null,
      {
        key: "groups",
        value: updateGroups,
      },
      {
        type: activityService.activityTypes.addGroup,
      }
    )
    setDisplayAddItem(false)
  }

  function deleteGroup(groupId) {
    const updateGroups = groups.filter((group) => group.id !== groupId)
    updateCurrentBoard(null, null, {
      key: "groups",
      value: updateGroups,
    })
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="board">
          {(provided) => (
            <ol
              className="group-list clean-list flex"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {groups.map((group, index) => (
                <Draggable key={group.id} draggableId={group.id} index={index}>
                  {(provided) => (
                    <li
                      className="group-li"
                      key={group.id}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <GroupPreview group={group} deleteGroup={deleteGroup} />
                    </li>
                  )}
                </Draggable>
              ))}
              {displayAddItem ? (
                <AddItemForm
                  onAddItem={onAddGroup}
                  setDisplayAddItem={setDisplayAddItem}
                  className="group-preview"
                />
              ) : (
                <button
                  className="add-group-btn"
                  onClick={() => setDisplayAddItem(true)}
                >
                  <SvgIcon iconName="plus" />
                  <span>Add another group</span>
                </button>
              )}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
