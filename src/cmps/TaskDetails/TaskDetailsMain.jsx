import { TaskDetailsDescription } from "./TaskDetailsDescription"
import { TaskDetailsChecklist } from "./TaskDetailsCheckList"
import { TaskDetailsAttachments } from "./TaskDetailsAttachments"
import { TaskDetailsActivities } from "./TaskDetailsActivities"
import { TaskDetailsMainHeader } from "./TaskDetailsMainHeader"

export function TaskDetailsMain({
  task,
  fields,
  handleChange,
  members,
  labels,
  onUpdateMembers,
  onAddDescription,
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
      <TaskDetailsChecklist
        checklists={task.checklists}
        onRemoveChecklist={onRemoveChecklist}
        onAddCheckListTodo={onAddCheckListTodo}
        onRemoveCheckListTodo={onRemoveCheckListTodo}
      />
      <TaskDetailsDescription
        task={task}
        fields={fields}
        handleChange={handleChange}
        onAddDescription={onAddDescription}
      />
      {/* <TaskDetailsAttachments /> */}
      {/* <TaskDetailsActivities /> */}
    </div>
  )
}
