import { useState } from "react"
import { updateCurrentBoard } from "../../store/board.actions"
import { utilService } from "../../services/util.service"
import SvgIcon from "../SvgIcon"
import { AddItemForm } from "../AddItemForm"
import { GroupActions } from "./GroupActions"
import { TaskList } from "./tasks/TaskList"

export function GroupPreview({ group, deleteGroup }) {
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
