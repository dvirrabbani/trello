import { useSelector } from "react-redux"
import { updateTaskLabels } from "../../store/board.actions"

export function TaskPopoverLabel({ task, onUpdateTask }) {
  const board = useSelector((storeState) => storeState.boardModule.board)

  return (
    <div className="task-popover-label">
      <h4 className="title">Label</h4>
      <ul className="clean-list flex column">
        {board?.labels?.map((lb) => {
          return (
            <li key={lb.id} className="flex">
              <input
                type="checkbox"
                checked={task?.labelIds?.includes(lb.id)}
                onChange={() =>
                  updateTaskLabels(lb.id, task?.labelIds, onUpdateTask)
                }
              />
              <span
                style={{ backgroundColor: lb.color, cursor: "pointer" }}
                onClick={() =>
                  updateTaskLabels(lb.id, task?.labelIds, onUpdateTask)
                }
              >
                <span>{lb.title}</span>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
