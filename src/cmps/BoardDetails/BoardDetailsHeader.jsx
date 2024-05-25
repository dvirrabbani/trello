import { useEffect, useState } from "react"
import { updateCurrentBoard } from "../../store/board.actions"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { Popover } from "../Popover"
import { BoardFilter } from "./BoardFilter"
import { FilterCount } from "./FilterCount"
import { store } from "../../store/store"
import { boardService } from "../../services/board.service"

export function BoardDetailsHeader({ board, filterBy }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const isPopoverOpen = Boolean(anchorEl)
  const isFilterEmpty = Object.values(filterBy).every((val) => {
    if (Array.isArray(val)) return val.length === 0
    return !val
  })
  const tasksCount = board.groups.reduce((acc, group) => {
    return acc + group.tasks.length
  }, 0)

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

  function onClearFilter() {
    store.dispatch({
      type: "SET_BOARD_FILTER",
      filterBy: boardService.getDefaultFilter(),
    })
  }

  function handleMemberDragStart(e, member) {
    e.dataTransfer.setData("text", member)
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
        <span>
          <button className="filter-btn button" onClick={handleClick}>
            <SvgIcon iconName="filter" />
            Filters
            {!isFilterEmpty && <FilterCount tasksCount={tasksCount} />}
          </button>
          {!isFilterEmpty && (
            <button className="clear-filter-btn button" onClick={onClearFilter}>
              Clear All
            </button>
          )}
        </span>
        <Popover
          id={isPopoverOpen ? "filter-popover" : undefined}
          open={isPopoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          title="Filter"
        >
          <BoardFilter
            members={board.members}
            labels={board.labels}
            filterBy={filterBy}
          />
        </Popover>
        <div className="divider"></div>
        <ul className="member-list">
          {board.members.map((member) => {
            return (
              <li
                key={member.id}
                className="member-item"
                draggable="true"
                onDragStart={(e) => handleMemberDragStart(e, member)}
              >
                <img src={member.imgUrl} alt="member image" />
              </li>
            )
          })}
        </ul>{" "}
      </div>
    </section>
  )
}
