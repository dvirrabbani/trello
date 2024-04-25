import { useForm } from "../../customHooks/useForm"
import { utilService } from "../../services/util.service"
import { Button } from "../Button"

export function TaskAttachmentPopover({ task, onUpdateTask, onClose }) {
  const [fields, , handleChange] = useForm({
    imgUrl: "",
  })

  function onAddAttachmentImgUrl() {
    const attachmentToAdd = {
      id: utilService.makeId(),
      imgUrl: fields.imgUrl,
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
      <label className="h3" htmlFor="task-popover-attachment-input">
        Paste a link
      </label>
      <input
        id="task-popover-attachment-input"
        name="imgUrl"
        className="input-text"
        placeholder="Paste a new link"
        value={fields.imgUrl}
        onChange={handleChange}
      />
      <footer className="flex justify-end align-center">
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={onAddAttachmentImgUrl}>
          Insert
        </Button>
      </footer>
    </div>
  )
}
