import { useEffect, useRef, useState } from "react"
import SvgIcon from "../SvgIcon"
import { Button } from "../Button"

export function TaskDetailsDescription({
  description,
  onUpdateTaskDescription,
}) {
  const [isEditDescriptionOpen, setIsEditDescriptionOpen] = useState(false)
  const descriptionRef = useRef()

  function onSaveDescription() {
    const txt = descriptionRef.current.innerText.trim()
    onUpdateTaskDescription(txt)
    setIsEditDescriptionOpen(false)
  }

  function onFocusDescription() {
    setIsEditDescriptionOpen(true)
    descriptionRef.current.focus()
  }

  useEffect(() => {
    if (isEditDescriptionOpen) {
      descriptionRef.current.focus()
      descriptionRef.current.innerText = description
    }
  }, [isEditDescriptionOpen])

  return (
    <section className="task-details-description">
      <div className="task-details-description task-detail-header-section">
        <SvgIcon size={"md"} iconName="description" />
        <h3 className="task-description-title">Description</h3>
        {/* Edit Button */}
        {!isEditDescriptionOpen && description && (
          <Button
            variant="group"
            onClick={() => setIsEditDescriptionOpen(true)}
          >
            Edit
          </Button>
        )}
      </div>
      <main>
        {!isEditDescriptionOpen && !description && (
          <Button
            variant="contained"
            onClick={() => setIsEditDescriptionOpen(true)}
          >
            Add a more details description...{" "}
          </Button>
        )}

        {!isEditDescriptionOpen && description && (
          <p onClick={onFocusDescription}>{description}</p>
        )}

        <div
          className="task-detail-description-edit"
          style={{ display: !isEditDescriptionOpen ? "none" : "" }}
        >
          {/* Editable description  */}
          <p
            autoFocus={true}
            ref={descriptionRef}
            className="input-text"
            suppressContentEditableWarning={true}
            contentEditable={true}
          >
            {description}
          </p>

          <div className="actions">
            <Button variant="primary" onClick={onSaveDescription}>
              Save
            </Button>
            <Button onClick={() => setIsEditDescriptionOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </main>
    </section>
  )
}
