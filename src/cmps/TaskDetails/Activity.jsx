import { ProfileImg } from "../ProfileImg"
import { format } from "date-fns"

export function Activity({ activity, profileSize }) {
  return (
    <div className="activity">
      <aside className="aside">
        <ProfileImg imgUrl={activity.byMember.imgUrl} size={profileSize} />
      </aside>
      <div className="activity-content">
        <header className="header">
          <span className="activity-title">{activity.byMember.fullname}</span>
          <span className="activity-sub-title">{activity.txt}</span>
        </header>
        <article className="activity-date">
          {format(
            new Date(activity.createdAt).getTime(),
            "MMM d yyyy 'at' h:mm aa"
          )}
        </article>
      </div>
    </div>
  )
}
