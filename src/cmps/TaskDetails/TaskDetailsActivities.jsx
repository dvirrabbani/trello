import SvgIcon from "../SvgIcon"
import { Activity } from "./Activity"
import { TaskDetailsComments } from "./TaskDetailsComments"

export function TaskDetailsActivities({
  task,
  boardMembers,
  onRemoveComment,
  onAddComment,
  onUpdateComment,
  activities,
}) {
  return (
    <section className="task-details-activities">
      <div className="task-details-activities-header task-detail-header-section">
        <SvgIcon size={"lg"} iconName="activities" />
        <h3 className="task-details-activities-title flex align-center">
          Activities
        </h3>
      </div>

      <TaskDetailsComments
        comments={task?.comments}
        boardMembers={boardMembers}
        onRemoveComment={onRemoveComment}
        onAddComment={onAddComment}
        onUpdateComment={onUpdateComment}
      />
      {/*Task Activities  */}
      {activities.length > 0 && (
        <ul className="task-activities clean-list">
          {activities.map((activity) => {
            return (
              <Activity
                key={activity.id}
                activity={activity}
                profileSize={"lg"}
              />
            )
          })}
        </ul>
      )}
    </section>
  )
}
