import { useState } from "react"
import SvgIcon from "./SvgIcon"
import { TaskList } from "./TaskList"
import { updateBoard, updateCurrentBoard } from "../store/board.actions"

export function GroupList({ groups }) {
  return (
    <ol className="group-list clean-list flex">
      {groups.map((group) => (
        <GroupPreview key={group.id} group={group} />
      ))}
    </ol>
  )
}

function GroupPreview({ group }) {
  const [groupToEdit, setGroupToEdit] = useState(group)

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
          <button className="group-edit icon-btn">
            <SvgIcon iconName="more" className="svg-icon" />
          </button>
        </div>
        <TaskList group={group} />
        <div className="group-actions flex justify-between">
          <button className="add-task-btn full">
            <SvgIcon iconName="plus" />
            <span>Add a card</span>
          </button>
          <button className="icon-btn">
            <SvgIcon iconName="taskTemplate" />
          </button>
        </div>
      </div>
    </li>
  )
}
