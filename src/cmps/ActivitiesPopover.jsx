import { Activity } from "./TaskDetails/Activity"

export function ActivitiesPopover({ activities }) {
  return (
    <ul className="activities-popover clean-list">
      {activities.map((activity) => {
        return (
          <Activity key={activity.id} activity={activity} profileSize={"lg"} />
        )
      })}
    </ul>
  )
}
