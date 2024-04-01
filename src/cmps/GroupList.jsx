import SvgIcon from "./SvgIcon"
import { TaskList } from "./TaskList"

export function GroupList({ groups }) {
  return (
    <ol className="group-list clean-list flex">
      {groups.map((group) => {
        return (
          <li key={group.id} className="group-li">
            <div className="group-preview">
              <div className="group-header flex justify-between">
                <textarea
                  className="group-title full"
                  spellcheck="false"
                  name=""
                >
                  {group.title}
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
      })}
    </ol>
  )
}
