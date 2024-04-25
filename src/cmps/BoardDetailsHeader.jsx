import { useState } from "react"
import { updateCurrentBoard } from "../store/board.actions"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"
import { Popover } from "./Popover"
import { FilterPopover } from "./FilterPopover"

export function BoardDetailsHeader({ board, filterBy }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const isPopoverOpen = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  function onToggleBoardStarred() {
    updateCurrentBoard(null, null, {
      key: "isStarred",
      value: !board.isStarred,
    })
  }

  return (
    <section className="board-details-header">
      <div className="board-topbar-start">
        <h1 className="board-details-title">{board.title}</h1>
        <Button>
          <SvgIcon
            onClick={onToggleBoardStarred}
            iconName={board.isStarred ? "starFill" : "star"}
          />
        </Button>
      </div>
      <div className="board-topbar-end">
        <button className="button" onClick={handleClick}>
          <SvgIcon iconName="filter" />
          Filters
        </button>
        <Popover
          id={isPopoverOpen ? "filter-popover" : undefined}
          open={isPopoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          title="Filter"
        >
          <FilterPopover
            members={board.members}
            labels={board.labels}
            filterBy={filterBy}
          />
        </Popover>
        <div className="divider"></div>
        <ul className="member-list">
          {board.members.map((member) => {
            return (
              <li key={member._id} className="member-item">
                <img src={member.imgUrl} alt="member image" />
              </li>
            )
          })}
        </ul>{" "}
      </div>
    </section>
  )
}
