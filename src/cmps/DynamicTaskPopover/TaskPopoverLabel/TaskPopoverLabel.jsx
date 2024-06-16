import { useSelector } from "react-redux"
import { Button } from "../../Button"
import { useEffect, useRef, useState } from "react"
import SvgIcon from "../../SvgIcon"
import { updateTaskLabels } from "../../../store/board.actions"
import { LabelButton } from "../../LabelButton"
import { Popover } from "@mui/material"
import { TaskPopoverLabelEdit } from "./TaskPopoverLabelEdit"
import { uiService } from "../../../services/ui.service"

export function TaskPopoverLabel({ task, onUpdateTask, onClose }) {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const [selectedLabel, setSelectedLabel] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const popoverRef = useRef(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const boardLabelsIds = board.labels.map((label) => label.id)
  const boardNewLabel = uiService.getBoardLabels().find((label) => !boardLabelsIds.includes(label.id))

  function onOpenAddBoardLabelPopover() {
    setAnchorEl(popoverRef.current)
  }

  function onSelectLabel(label) {
    setSelectedLabel(() => label)
  }

  function onBack() {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (selectedLabel) {
      setAnchorEl(popoverRef.current)
    }
  }, [selectedLabel])

  const isPopoverOpen = Boolean(anchorEl)

  return (
    <>
      <div className="task-popover-label" ref={popoverRef}>
        <h4 className="title h4">Labels</h4>
        <ul className="clean-list task-label-list">
          {board?.labels?.map((lb) => {
            return (
              <li key={lb.id}>
                {/* Add label To current Task  */}
                <input
                  type="checkbox"
                  checked={task?.labelIds?.includes(lb.id)}
                  onChange={() => updateTaskLabels(lb.id, task?.labelIds, onUpdateTask)}
                />
                {/* Add label To current Task  */}
                <LabelButton
                  color={lb.bgColor}
                  title={lb.title}
                  onClick={() => updateTaskLabels(lb.id, task?.labelIds, onUpdateTask)}
                />
                {/* Edit Board label  */}
                <Button onClick={() => onSelectLabel(lb)}>
                  <SvgIcon iconName={"edit"} />
                </Button>
              </li>
            )
          })}
        </ul>
        {/* Add Board Label */}

        <Button disabled={!boardNewLabel} variant="contained" onClick={onOpenAddBoardLabelPopover}>
          Create a new label
        </Button>
        {/* Add new board label */}
      </div>
      <Popover
        id={isPopoverOpen ? "board-label-edit-popover" : undefined}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        title={"title"}
        transitionDuration={0}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <TaskPopoverLabelEdit
          onBack={onBack}
          initialLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
          task={task}
          onClose={onClose}
        ></TaskPopoverLabelEdit>
      </Popover>
    </>
  )
}
