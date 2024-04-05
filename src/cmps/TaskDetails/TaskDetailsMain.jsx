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
  onUpdateMembers,
  onAddDescription,
}) {
  return (
    <div className="task-details-main">
      <TaskDetailsMainHeader
        task={task}
        members={members}
        onUpdateMembers={onUpdateMembers}
      />
      {/* <TaskDetailsChecklist /> */}
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
