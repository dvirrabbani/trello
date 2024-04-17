import { useSelector } from "react-redux"
import { useForm } from "../../../customHooks/useForm"
import { boardService } from "../../../services/board.service"
import { Button } from "../../Button"
import SvgIcon from "../../SvgIcon"
import { updateCurrentBoard } from "../../../store/board.actions"
import { useParams } from "react-router"
import { utilService } from "../../../services/util.service"

export function TaskPopoverLabelEdit({
  initialLabel,
  task,
  onClose,
  onBack,
  setSelectedLabel,
}) {
  const params = useParams()
  const board = useSelector((storeState) => storeState.boardModule.board)
  const boardLabelsIds = board.labels.map((label) => label.id)

  const boardNewLabel = boardService
    .getLabels()
    .find((label) => !boardLabelsIds.includes(label.id))

  const [fields, setFields, handleChange] = useForm({
    title: initialLabel ? initialLabel.title : "",
    bgColor: initialLabel ? initialLabel.bgColor : boardNewLabel.bgColor,
  })

  function onAddLabel() {
    // Check if label is already exist in board labels, then add it to board labels
    const foundSameBoardLabel = board.labels.find(
      (boardLabel) =>
        boardLabel.bgColor === fields.bgColor &&
        boardLabel.title === fields.title
    )

    const labelToAdd = {
      id: utilService.makeId(),
      bgColor: fields.bgColor,
      title: fields.title,
    }

    const boardLabelsToAdd = !foundSameBoardLabel
      ? [...board.labels, labelToAdd]
      : [...board.labels]

    // associate label task, if it has label already exists in board labels remove label from task labels
    const taskLabelIdToAdd = !foundSameBoardLabel
      ? [...task.labelIds, labelToAdd.id]
      : task.labelIds.filter((labelId) => labelId !== labelToAdd.id)

    // update Board labels
    updateCurrentBoard(null, null, {
      key: "labels",
      value: boardLabelsToAdd,
    })
    // update task label ids
    updateCurrentBoard(params.groupId, params.taskId, {
      key: "labelIds",
      value: taskLabelIdToAdd,
    })
  }

  function onUpdateBoardLabels() {
    const newBoardLabelId = utilService.makeId()

    const labelToUpdate = {
      id: newBoardLabelId,
      bgColor: fields.bgColor,
      title: fields.title,
    }

    const boardLabelsEdit = board.labels.map((boardLabel) =>
      boardLabel.id === initialLabel.id ? labelToUpdate : boardLabel
    )

    updateCurrentBoard(null, null, {
      key: "labels",
      value: boardLabelsEdit,
    })

    // update tasks label ids when task already associated with the selected label
    const taskLabelIdx = task.labelIds.findIndex(
      (labelId) => labelId === initialLabel.id
    )

    if (taskLabelIdx > 0) {
      task.labelIds[taskLabelIdx] = labelToUpdate.id
      updateCurrentBoard(params.groupId, params.taskId, {
        key: "labelIds",
        value: task.labelIds,
      })
    }

    setSelectedLabel(null)
    onBack()
  }

  function onRemoveLabel() {
    const boardLabels = board.labels.filter(
      (boardLabel) => boardLabel.id !== initialLabel.id
    )
    const taskLabelsIds = task.labelIds.filter(
      (labelId) => labelId !== initialLabel.id
    )
    // update Board labels
    updateCurrentBoard(null, null, {
      key: "labels",
      value: boardLabels,
    })

    // update task label ids
    updateCurrentBoard(params.groupId, params.taskId, {
      key: "labelIds",
      value: taskLabelsIds,
    })

    onBack()
  }

  function onSelectNewBoardLabel(label) {
    setFields((prevFields) => ({ ...prevFields, bgColor: label.bgColor }))
  }

  return (
    <section className="task-popover-label-edit">
      <div className="edit-header flex align-center justify-between">
        <div className="navigate-back" style={{ transform: "rotate(90deg)" }}>
          <Button onClick={onBack}>
            <SvgIcon iconName={"arrow"} />
          </Button>
        </div>

        <div className="title">
          {initialLabel ? "Edit label" : "Create label"}
        </div>
        <div className="close" onClick={onClose}>
          <Button>
            <SvgIcon iconName={"close"} />
          </Button>
        </div>
      </div>
      <div className="edit-label-preview">
        <div
          className="label"
          style={{
            backgroundColor: fields?.bgColor,
          }}
        >
          <span>{fields.title}</span>
        </div>
      </div>
      <div className="edit-label-main">
        <h3 className="h4">Title</h3>
        <input
          className="input-text"
          name="title"
          value={fields.title}
          onChange={handleChange}
          type="text"
        />
        <h3 className="h4">Select a color</h3>
        <ul className="clean-list colors-palette-grid">
          {/* Label Color Grid */}
          {boardService.getLabels().map((label) => {
            return (
              <article
                key={label.id}
                className="board-label"
                style={{ backgroundColor: label.bgColor }}
                onClick={() => onSelectNewBoardLabel(label)}
              ></article>
            )
          })}
        </ul>
      </div>
      {/* Label Actions  */}

      {/* Add Label */}
      {!initialLabel && (
        <div className="actions">
          <Button variant="primary" onClick={onAddLabel}>
            Create
          </Button>
        </div>
      )}

      {/* Edit Label */}
      {initialLabel && (
        <div className="actions flex justify-between">
          <Button variant="primary" onClick={onUpdateBoardLabels}>
            Save
          </Button>
          <Button onClick={onRemoveLabel} variant="contained">
            Delete
          </Button>
        </div>
      )}
    </section>
  )
}
