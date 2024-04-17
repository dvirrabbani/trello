import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function TaskDetailsAttachments({
  attachments,
  onUpdateTask,
  onUpdateCover,
}) {
  function onRemoveAttachment(attachmentId) {
    onUpdateTask({
      key: "attachments",
      value: attachments.filter((a) => a.id !== attachmentId),
    })
  }

  return (
    <section className="task-details-attachments">
      <div className="task-detail-header-section">
        <SvgIcon size={"md"} iconName="attachment" />
        <h3 className="title"> Attachments</h3>
      </div>
      <ul className="clean-list">
        {attachments.map((attachment) => (
          <li className="attachment-item" key={attachment.id}>
            <div
              className="thumbnail"
              style={{ backgroundImage: `url(${attachment.imgUrl})` }}
            ></div>
            <div className="actions">
              <Button
                variant="link"
                onClick={() => onUpdateCover({ bgImg: attachment.imgUrl })}
              >
                Make cover
              </Button>
              <Button
                variant="link"
                onClick={() => onRemoveAttachment(attachment.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
