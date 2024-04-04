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
}) {
  return (
    <div className="task-details-main">
      <TaskDetailsMainHeader
        task={task}
        members={members}
        onUpdateMembers={onUpdateMembers}
      />
      {/* <TaskDetailsChecklist /> */}
      {/* <TaskDetailsDescription fields={fields} handleChange={handleChange} /> */}
      {/* <TaskDetailsAttachments /> */}
      {/* <TaskDetailsActivities /> */}
    </div>
  )
}
