import { utilService } from "../../services/util.service"
import { LabelButton } from "../LabelButton"
import { Button } from "../Button"
import { BtnImgUploader } from "../btn/BtnImgUpload"
import { uiService } from "../../services/ui.service"
import { ta } from "date-fns/locale"

export function TaskCoverPopover({ task, onUpdateTask, onClose }) {
  const bgColor = task?.style?.bgColor || ""
  const bgImg = task?.style?.bgImg || ""
  const isCoverFull = task?.style?.isCoverFull || null

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
      id: `a${utilService.makeId()}`,
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

  async function onUpdateTaskCoverImg(imgUrl) {
    const taskStyleToUpdate = {}
    const dominantColor = await uiService.getDominantColor(imgUrl)

    // Update task cover
    if (imgUrl !== task?.style?.bgImg) {
      taskStyleToUpdate.bgImg = imgUrl
      taskStyleToUpdate.bgColor = `rgb(${dominantColor})`
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

  function coverClassNames() {
    const classNames = ["cover"]

    if (!task.style) {
      classNames.push("disabled")
      return classNames.join(" ")
    }

    if (bgImg) {
      classNames.push("has-bg-img")
    }

    return classNames.join(" ")
  }

  return (
    <div className="task-cover-popover">
      {/* Cover Size Edit */}
      <section className="cover-size-edit">
        <h4 className="label">Size</h4>
        <ul className="cover-list clean-list">
          {/* Cover Normal Size */}
          <li
            className={`${coverClassNames()} size-normal ${
              !isCoverFull && task.style ? "active" : ""
            }`}
            onClick={() => onChangeCoverSize(false)}
          >
            <div className="cover-background" style={coverStyle}></div>
            <div className="skeleton-card">
              <div className="skeleton skeleton-line"></div>
              <div className="skeleton skeleton-line skeleton-line-2"></div>
              <div className="skeleton-card-row">
                <div className="skeleton skeleton-btn"></div>
                <div className="skeleton skeleton-btn"></div>
              </div>
              <div className="skeleton skeleton-circle"></div>
            </div>
          </li>
          {/* Cover Full Size */}
          <li
            className={`${coverClassNames()} size-full ${
              isCoverFull === true ? " active" : ""
            }`}
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
        {uiService.getCoverColors().map((color) => {
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
