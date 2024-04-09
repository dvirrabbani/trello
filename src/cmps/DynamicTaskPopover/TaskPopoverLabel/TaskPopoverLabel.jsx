import { useSelector } from "react-redux"
import { Button } from "../../Button"
import { useState } from "react"
import { TaskPopoverLabelEdit } from "./TaskPopoverLabelEdit"
import { LABELS_LIST } from "../../../const/label"
import SvgIcon from "../../SvgIcon"
import { updateBoard, updateTaskLabels } from "../../../store/board.actions"

export function TaskPopoverLabel({ task, onUpdateTask, onClose }) {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const [selectedLabel, setSelectedLabel] = useState(null)
  const [updateLabel, setUpdateLabel] = useState(null)

  function onRemoveLabel(labelId) {
    updateBoard(board, {
      key: "labels",
      value: board.labels.filter((l) => l.id !== labelId),
    })
    onUpdateTask({
      key: "labelIds",
      value: task.labelIds.filter((l) => l !== labelId),
    })
    setUpdateLabel(null)
    setSelectedLabel(null)
    onClose()
  }

  function onAddLabel(label) {
    if (boardLabelsIds.includes(label.id)) {
      onUpdateLabel(label)
      return
    } else {
      updateBoard(board, {
        key: "labels",
        value: [...board.labels, label],
      })
      onUpdateTask({
        key: "labelIds",
        value: [...task.labelIds, label.id],
      })
    }
    setUpdateLabel(null)
    setSelectedLabel(null)
    onClose()
  }

  function onUpdateLabel(label) {
    label.color = updateLabel?.color || label.color
    const updateLabelIds = [...task.labelIds]
    const lIdx = task.labelIds.findIndex((lId) => lId === label.id)
    if (updateLabel && label.id !== updateLabel?.id) {
      updateLabelIds[lIdx] = updateLabel.id
    }

    updateBoard(board, {
      key: "labels",
      value: board.labels.map((boardLabel) =>
        boardLabel.id === label.id ? label : boardLabel
      ),
    })

    onUpdateTask({
      key: "labelIds",
      value: updateLabelIds,
    })

    setUpdateLabel(null)
    setSelectedLabel(null)
    onClose()
  }

  function onSelectEditLabel(label) {
    setSelectedLabel(label)
  }
  const boardLabelsIds = board.labels.map((label) => label.id)
  return (
    <div className="task-popover-label">
      <h4 className="title">Label</h4>
      <ul className="clean-list task-label-list">
        {board?.labels?.map((lb) => {
          return (
            <li key={lb.id} className="">
              <input
                type="checkbox"
                checked={task?.labelIds?.includes(lb.id)}
                onChange={() =>
                  updateTaskLabels(lb.id, task?.labelIds, onUpdateTask)
                }
              />
              <div
                className="label"
                style={{
                  backgroundColor: lb.color,
                  minWidth: "32px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  updateTaskLabels(lb.id, task?.labelIds, onUpdateTask)
                }
              >
                <span>{lb.title}</span>
              </div>
              <Button onClick={() => onSelectEditLabel(lb)}>
                <SvgIcon iconName={"edit"} />
              </Button>
            </li>
          )
        })}
      </ul>
      <Button
        variant="contained"
        onClick={() =>
          setSelectedLabel(() => {
            const newLabel = LABELS_LIST.find(
              (label) => !boardLabelsIds.includes(label.id)
            )
            return newLabel
          })
        }
      >
        Create a new label
      </Button>
      {selectedLabel?.id && (
        <TaskPopoverLabelEdit
          label={selectedLabel}
          setSelectedLabel={setSelectedLabel}
          updateLabel={updateLabel}
          setUpdateLabel={setUpdateLabel}
          onUpdateLabel={onUpdateLabel}
          onClose={onClose}
          onAddLabel={onAddLabel}
          onRemoveLabel={onRemoveLabel}
          mode={boardLabelsIds.includes(selectedLabel.id) ? "edit" : "add"}
        />
      )}
    </div>
  )
}
