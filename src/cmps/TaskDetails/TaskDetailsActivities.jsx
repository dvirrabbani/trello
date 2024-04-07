import dayjs from "dayjs"
import SvgIcon from "../SvgIcon"
import { Button } from "../Button"

export function TaskDetailsActivities({ task, boardMembers, onRemoveComment }) {
  return (
    <section className="task-details-activities">
      <div className="task-details-activities-header flex justify-between">
        <h3 className="task-description-title flex align-center">
          <SvgIcon iconName="description" /> Activities
        </h3>
      </div>
      {task?.comments && (
        <ul className="comments-list clean-list">
          {task.comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <div className="aside">
                <Button shape={"circle"}>
                  <img src={comment.byMember.imgUrl} />
                </Button>
              </div>
              <div className="comment-body">
                <div className="comment-header">
                  <span className="member-name">
                    {
                      boardMembers.find(
                        (boardMember) => boardMember.id === comment.byMember.id
                      ).fullname
                    }
                  </span>
                  <span className="comment-date">
                    {dayjs(comment.byMember.createdAt).format(
                      "MMM D YYYY [at] h:mm A"
                    )}
                  </span>
                </div>
                <p className="comment-txt">{comment.txt}</p>
                <div className="comment-actions">
                  <Button
                    variant="link"
                    onClick={() => onRemoveComment(comment.id, task.comments)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
