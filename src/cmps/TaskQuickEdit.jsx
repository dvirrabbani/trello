import { TaskPreview } from "./Groups/tasks/TaskPreview"
import { Modal } from "./Modal"

export function TaskQuickEdit({ groupId, task, boundaries, setTaskQuickEdit }) {
  console.log("boundaries", boundaries)
  console.log("task", task)
  const style = {
    top: boundaries.y,
    left: boundaries.x,
  }
  return (
    <div className="task-quick-edit" style={style}>
      <TaskPreview groupId={groupId} task={task} />
      <button onClick={() => setTaskQuickEdit(null)}>Save</button>
    </div>
  )
}
