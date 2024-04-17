import { useState } from "react"
import { Button } from "./Button"
import { Popover } from "@mui/material"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { updateBoard } from "../store/board.actions"
import SvgIcon from "./SvgIcon"

export function SelectStarredBoardsButton() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const starredBoards = boards?.filter((board) => board.isStarred)
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  function handleClick(event) {
    if (starredBoards.length) setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function onSelectBoard(boardId) {
    navigate(`/board/${boardId}`)
    setAnchorEl(null)
  }

  function onRemoveBoardIsStarred(board) {
    updateBoard(board, {
      key: "isStarred",
      value: false,
    })
  }

  const isPopoverOpen = Boolean(anchorEl)
  const popoverId = isPopoverOpen ? "starred-board-popover-id" : undefined

  return (
    <section className="select-starred-boards-button">
      <Button variant="contained" onClick={handleClick}>
        <span>Starred</span>
        <SvgIcon iconName={"arrow"} />
      </Button>
      <Popover
        id={popoverId}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        title={"Create board"}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <section className="search-options">
          {starredBoards?.map((board) => (
            <Button
              key={board._id}
              className="search-option"
              onClick={() => onSelectBoard(board._id)}
            >
              <img
                className="thumbnail"
                src={board.style.bgImg}
                alt="board image"
              />
              <span>{board.title}</span>
              <SvgIcon
                onClick={() => onRemoveBoardIsStarred(board)}
                iconName={"starFill"}
              />
            </Button>
          ))}
        </section>
      </Popover>
    </section>
  )
}
