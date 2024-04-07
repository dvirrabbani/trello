import { TaskDetailsDescription } from "./TaskDetailsDescription"
import { TaskDetailsChecklist } from "./TaskDetailsCheckList"
import { TaskDetailsAttachments } from "./TaskDetailsAttachments"
import { TaskDetailsActivities } from "./TaskDetailsActivities"
import { TaskDetailsMainHeader } from "./TaskDetailsMainHeader"

export function TaskDetailsMain({
  task,
  handleChange,
  members,
  labels,
  onUpdateTask,
  onUpdateTaskDescription,
  onRemoveChecklist,
  onAddCheckListTodo,
  onRemoveCheckListTodo,
  onUpdateCheckListTodo,
}) {
  return (
    <div className="task-details-main">
      <TaskDetailsMainHeader
        task={task}
        labels={labels}
        members={members}
        onUpdateTask={onUpdateTask}
      />
      <TaskDetailsDescription
        description={task.description}
        handleChange={handleChange}
        onUpdateTaskDescription={onUpdateTaskDescription}
      />
      <TaskDetailsChecklist
        checklists={task.checklists}
        onRemoveChecklist={onRemoveChecklist}
        onAddCheckListTodo={onAddCheckListTodo}
        onRemoveCheckListTodo={onRemoveCheckListTodo}
        onUpdateCheckListTodo={onUpdateCheckListTodo}
      />
      {/* <TaskDetailsAttachments /> */}
      {/* <TaskDetailsActivities /> */}
    </div>
  )
}
