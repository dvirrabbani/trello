import { useState } from "react"
import SvgIcon from "./SvgIcon"
import { TaskList } from "./TaskList"
import { updateCurrentBoard } from "../store/board.actions"
import { utilService } from "../services/util.service"
import { AddItemForm } from "./AddItemForm"
import { GroupActions } from "./GroupActions"

export function GroupList({ groups }) {
  const [displayAddItem, setDisplayAddItem] = useState(false)

  function onAddGroup(inputVal) {
    const group = {
      archivedAt: null,
      id: `g${utilService.makeId()}`,
      style: {},
      tasks: [],
      title: inputVal,
    }
    const updateGroups = [...groups, group]
    updateCurrentBoard(null, null, {
      key: "groups",
      value: updateGroups,
    })
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
    <ol className="group-list clean-list flex">
      {groups.map((group) => (
        <GroupPreview key={group.id} group={group} deleteGroup={deleteGroup} />
      ))}
      {displayAddItem ? (
        <AddItemForm
          onAddItem={onAddGroup}
          setDisplayAddItem={setDisplayAddItem}
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
  )
}

function GroupPreview({ group, deleteGroup }) {
  const [groupToEdit, setGroupToEdit] = useState(group)
  const [groupActions, setGroupActions] = useState(false)
  const [displayAddItem, setDisplayAddItem] = useState(false)

  function handleChange({ target }) {
    let { value, type, name } = target
    setGroupToEdit((prevGroup) => ({ ...prevGroup, [name]: value }))
  }

  function onFocusOut() {
    updateCurrentBoard(group.id, null, {
      key: "title",
      value: groupToEdit.title,
    })
  }

  function onAddTask(inputVal) {
    const task = {
      archivedAt: null,
      id: `t${utilService.makeId()}`,
      title: inputVal,
    }
    const tasks = [...group.tasks, task]
    updateCurrentBoard(group.id, null, {
      key: "tasks",
      value: tasks,
    })
    setDisplayAddItem(false)
  }

  function onDeleteGroup(groupId) {
    deleteGroup(groupId)
    setGroupActions(false)
  }

  return (
    <li className="group-li">
      <div className="group-preview">
        <div className="group-header flex justify-between">
          <textarea
            value={groupToEdit.title}
            onChange={handleChange}
            className="group-title full"
            spellCheck="false"
            name="title"
            onBlur={onFocusOut}
          >
            {groupToEdit.title}
          </textarea>
          <button
            className="group-edit icon-btn"
            onClick={() => setGroupActions(true)}
          >
            <SvgIcon iconName="more" className="svg-icon" />
          </button>
          {groupActions && (
            <GroupActions
              groupId={group.id}
              onDeleteGroup={onDeleteGroup}
              setGroupActions={setGroupActions}
            />
          )}
        </div>
        <TaskList group={group} />
        <div className="group-footer flex justify-between">
          {displayAddItem ? (
            <AddItemForm
              onAddItem={onAddTask}
              setDisplayAddItem={setDisplayAddItem}
            />
          ) : (
            <div>
              <button
                className="add-task-btn full"
                onClick={() => setDisplayAddItem(true)}
              >
                <SvgIcon iconName="plus" />
                <span>Add a card</span>
              </button>
              <button className="icon-btn">
                <SvgIcon iconName="taskTemplate" />
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
