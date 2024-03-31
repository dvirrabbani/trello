import SvgIcon from "./SvgIcon"
import { TaskList } from "./TaskList"

export function GroupList({ groups }) {
  return (
    <ol>
      {groups.map((group) => {
        return (
          <li key={group.id}>
            <div className="group-preview">
              <div className="group-title">{group.title}</div>
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
