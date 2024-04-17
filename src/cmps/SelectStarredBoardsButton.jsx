import { useState } from "react"
import { Button } from "./Button"
import { Popover } from "@mui/material"
import SvgIcon from "./SvgIcon"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

export function SelectStarredBoardsButton() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const isPopoverOpen = Boolean(anchorEl)
  const popoverId = isPopoverOpen ? "starred-board-popover-id" : undefined

  function onSelectBoard(boardId) {
    navigate(`/board/${boardId}`)
    setAnchorEl(null)
  }

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
          {boards
            ?.filter((board) => board.isStarred)
            ?.map((board) => (
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
                <SvgIcon iconName={"starFill"} />
              </Button>
            ))}
        </section>
      </Popover>
    </section>
  )
}
