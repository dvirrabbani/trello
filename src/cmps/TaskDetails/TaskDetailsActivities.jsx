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
      <div className="task-details-activities-header task-detail-header-section">
        <SvgIcon size={"lg"} iconName="activities" />
        <h3 className="task-details-activities-title flex align-center">
          Activities
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
