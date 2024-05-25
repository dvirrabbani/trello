import { utilService } from "../../services/util.service"
import { BtnImgUploader } from "../btn/BtnImgUpload"

export function TaskAttachmentPopover({ task, onUpdateTask, onClose }) {
  function onAddAttachmentImgUrl(imgUrl) {
    const attachmentToAdd = {
      id: utilService.makeId(),
      imgUrl,
      createdAt: Date.now(),
    }
    onUpdateTask({
      key: "attachments",
      value: [...task.attachments, attachmentToAdd],
    })
    onClose()
  }
  return (
    <div className="task-attachment-popover">
      <h3 className="h3">Attach a file from your computer</h3>
      <BtnImgUploader
        title={"Choose a file"}
        onUploaded={onAddAttachmentImgUrl}
      />
    </div>
  )
}
