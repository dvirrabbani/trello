import { Link } from "react-router-dom"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import dayjs from "dayjs"

export function TaskDetailsAttachments({ task, onUpdateTask }) {
  function onRemoveAttachment(attachmentId) {
    onUpdateTask({
      key: "attachments",
      value: task.attachments.filter((a) => a.id !== attachmentId),
    })

    if (
      task.attachments.find((attachment) => attachment.id === attachmentId)
        .imgUrl === task.style.bgImg
    ) {
      onUpdateTask({
        key: "style",
        value: {},
      })
    }
  }

  function minimizeImgUrl(imgUrl) {
    const urlSeparatedBySlash = imgUrl.split("/")
    return urlSeparatedBySlash[urlSeparatedBySlash.length - 1]
  }

  function onUpdateTaskCover(attachmentImgUrl) {
    const taskStyleToUpdate = {}
    // remove attachment cover
    if (attachmentImgUrl !== task?.style?.bgImg) {
      taskStyleToUpdate.bgImg = attachmentImgUrl
    }

    onUpdateTask({
      key: "style",
      value: taskStyleToUpdate,
    })
  }

  return (
    <section className="task-details-attachments">
      <div className="task-detail-header-section">
        <SvgIcon size={"md"} iconName="attachment" />
        <h3 className="title"> Attachments</h3>
      </div>
      <ul className="attachment-list clean-list">
        {task.attachments.map((attachment) => (
          <li className="attachment-item" key={attachment.id}>
            <div
              className="thumbnail"
              style={{ backgroundImage: `url(${attachment.imgUrl})` }}
            ></div>
            <div className="attachment-details">
              <Link to={attachment.imgUrl} target="_blank">
                {minimizeImgUrl(attachment.imgUrl)}
              </Link>
              <article className="actions">
                <span>
                  Added{" "}
                  {dayjs(attachment.createdAt).format("MMM D YYYY [at] h:mm A")}
                </span>
                <Button onClick={() => onRemoveAttachment(attachment.id)}>
                  <span>Delete</span>
                </Button>
                <Button
                  variant="link"
                  onClick={() => onUpdateTaskCover(attachment.imgUrl)}
                >
                  <SvgIcon iconName={"cover"} />
                  <span>
                    {attachment.imgUrl !== task?.style?.bgImg
                      ? "Make cover"
                      : "Remove cover"}{" "}
                  </span>
                </Button>
              </article>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
