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
  onUpdateMembers,
  onUpdateTaskDescription,
  onUpdateTaskLabel,
  onRemoveChecklist,
  onAddCheckListTodo,
  onRemoveCheckListTodo,
}) {
  return (
    <div className="task-details-main">
      <TaskDetailsMainHeader
        task={task}
        labels={labels}
        members={members}
        onUpdateMembers={onUpdateMembers}
        onUpdateTaskLabel={onUpdateTaskLabel}
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
      />
      {/* <TaskDetailsAttachments /> */}
      {/* <TaskDetailsActivities /> */}
    </div>
  )
}
