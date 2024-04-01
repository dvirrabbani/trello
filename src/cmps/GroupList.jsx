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
                <div className="group-title">{group.title}</div>
                <SvgIcon iconName="listEdit" className="svg-icon" />
              </div>
              <TaskList group={group} />
              <div className="group-actions">
                <button className="add-task">
                  <SvgIcon iconName="plus" />
                  <span>Add a card</span>
                </button>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
