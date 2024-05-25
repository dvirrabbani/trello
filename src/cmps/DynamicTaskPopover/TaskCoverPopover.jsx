import { utilService } from "../../services/util.service"
import { COVER_COLORS_lIST } from "../../const/label"
import { LabelButton } from "../LabelButton"
import { Button } from "../Button"
import { BtnImgUploader } from "../btn/BtnImgUpload"

export function TaskCoverPopover({ task, onUpdateTask, onClose }) {
  const { bgColor = "", bgImg = "", isCoverFull = false } = task?.style

  function onChangeCoverSize(coverSizeToUpdate) {
    if (coverSizeToUpdate === isCoverFull) {
      return
    }

    onUpdateTask({
      key: "style",
      value: { ...task.style, isCoverFull: coverSizeToUpdate },
    })
  }

  function onAddAttachmentImgUrl(imgUrl) {
    const attachmentToAdd = {
      id: utilService.makeId(),
      imgUrl: imgUrl,
      createdAt: Date.now(),
    }
    onUpdateTask({
      key: "attachments",
      value: [...task.attachments, attachmentToAdd],
    })
  }

  function onRemoveCover() {
    onUpdateTask({
      key: "style",
      value: {},
    })
  }

  function updateCoverColor(color) {
    onUpdateTask({
      key: "style",
      value: { bgColor: color },
    })
  }

  function onUpdateTaskCoverImg(imgUrl) {
    const taskStyleToUpdate = {}

    // Update task cover
    if (imgUrl !== task?.style?.bgImg) {
      taskStyleToUpdate.bgImg = imgUrl
    }

    onUpdateTask({
      key: "style",
      value: taskStyleToUpdate,
    })

    // update task attachments
    onAddAttachmentImgUrl(imgUrl)
  }

  const coverStyle = {
    backgroundImage: `url(${task?.style?.bgImg})`,
    backgroundColor: bgColor ? bgColor : "",
  }

  return (
    <div className="task-cover-popover">
      {/* Cover Size Edit */}
      <section className="cover-size-edit">
        <h4 className="label">Size</h4>
        <ul className="cover-list clean-list">
          {/* Cover Normal Size */}
          <li
            className={`cover size-normal ${
              bgImg && !isCoverFull ? "active" : ""
            }
             ${bgImg ? "has-bg-img" : ""}`}
            onClick={() => onChangeCoverSize(false)}
          >
            <div className="cover-background" style={coverStyle}></div>
            <div className="skeleton-card">
              {/* TODO change skeleton background color by cover color */}
              <div className="skeleton skeleton-line"></div>
              <div className="skeleton skeleton-line skeleton-line-2"></div>
              <div className="skeleton-card-row">
                <div className="skeleton skeleton-btn"></div>
                <div className="skeleton skeleton-btn"></div>
              </div>
              <div className="skeleton-circle"></div>
            </div>
          </li>
          {/* Cover Full Size */}
          <li
            className={`cover size-full ${
              bgImg && isCoverFull ? "active" : ""
            } ${bgImg ? "has-bg-img" : ""}`}
            onClick={() => onChangeCoverSize(true)}
          >
            <div className="cover-background" style={coverStyle}></div>
            <div className="skeleton-card">
              {/* TODO change skeleton background color by cover color */}
              <div className="skeleton skeleton-line"></div>
              <div className="skeleton skeleton-line skeleton-line-2"></div>
            </div>
          </li>
        </ul>
      </section>
      {/* Remove Cover Color */}
      {(bgColor || bgImg) && (
        <Button
          className={"remove-cover-btn"}
          variant="contained"
          onClick={onRemoveCover}
        >
          Remove cover
        </Button>
      )}
      {/* Update Cover Color */}
      <h4 className="label">Colors</h4>
      <ul className="clean-list colors-palette-grid">
        {COVER_COLORS_lIST.map((color) => {
          return (
            <LabelButton
              key={color}
              color={color}
              onClick={() => updateCoverColor(color)}
            />
          )
        })}
      </ul>
      {/* Upload Cover image */}
      <h4 className="label">Attachments</h4>
      <BtnImgUploader
        title={"Upload a cover image"}
        onUploaded={onUpdateTaskCoverImg}
      />
    </div>
  )
}
