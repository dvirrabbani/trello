export function TaskPopoverLabel({ labels, onUpdateTaskLabel }) {
  return (
    <div className="task-popover-label">
      <h4 className="title">Label</h4>
      <ul className="clean-list flex column">
        {labels?.board?.map((lb) => {
          return (
            <li key={lb.id} className="flex">
              <input
                type="checkbox"
                checked={labels.task.find((lt) => lt.id === lb.id)}
                onChange={() => onUpdateTaskLabel(lb.id)}
              />
              <span
                style={{ backgroundColor: lb.color, cursor: "pointer" }}
                onClick={() => onUpdateTaskLabel(lb.id)}
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
