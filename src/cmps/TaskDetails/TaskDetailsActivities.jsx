import SvgIcon from "../SvgIcon"
import { TaskDetailsComments } from "./TaskDetailsComments"

export function TaskDetailsActivities({
  task,
  boardMembers,
  onRemoveComment,
  onAddComment,
  onUpdateComment,
}) {
  return (
    <section className="task-details-activities">
      <div className="task-details-activities-header flex justify-between">
        <h3 className="task-description-title flex align-center">
          <SvgIcon iconName="description" /> Activities
        </h3>
      </div>

      {task?.comments && (
        <TaskDetailsComments
          comments={task.comments}
          boardMembers={boardMembers}
          onRemoveComment={onRemoveComment}
          onAddComment={onAddComment}
          onUpdateComment={onUpdateComment}
        />
      )}
    </section>
  )
}
