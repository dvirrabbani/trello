import { useForm } from "../../customHooks/useForm"
import { activityService } from "../../services/acitivity.service"
import { eventBus } from "../../services/event-bus.service"
import { utilService } from "../../services/util.service"
import { addTaskCheckList, updateCurrentBoard } from "../../store/board.actions"
import { store } from "../../store/store"
import { Button } from "../Button"

export function TaskPopoverDuplicateTask({ task, onClose, groupId }) {
  const [fields, , handleChange] = useForm({
    title: task.title,
  })
  const group = store
    .getState()
    .boardModule.board.groups.find((group) => group.id === groupId)

  function onDuplicateTask() {
    const groupTasks = [...group.tasks]
    const taskIdx = groupTasks.findIndex((t) => t.id === task.id)
    const taskCopy = { ...task }
    taskCopy.title = fields.title
    taskCopy.id = `t${utilService.makeId()}`
    groupTasks.splice(taskIdx + 1, 0, taskCopy)

    updateCurrentBoard(groupId, null, {
      key: "tasks",
      value: groupTasks,
    })

    //close popover
    onClose()
    //close quick edit task
    eventBus.emit("quickEditTask", null)
  }

  return (
    <div className="task-popover-check-list" style={{ display: "grid" }}>
      <div className="form-group">
        <label htmlFor="task-checklist-title" className="title">
          Title
        </label>
        <textarea
          name="title"
          id="task-checklist-title"
          type="text"
          value={fields.title || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <Button variant="primary" onClick={onDuplicateTask}>
        Create card
      </Button>
    </div>
  )
}
