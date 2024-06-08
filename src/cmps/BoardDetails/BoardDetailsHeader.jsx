import { useEffect, useRef, useState } from "react"
import { updateBoard, updateCurrentBoard } from "../../store/board.actions"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { Popover } from "../Popover"
import { BoardFilter } from "./BoardFilter"
import { FilterCount } from "./FilterCount"
import { store } from "../../store/store"
// import { boardService } from "../../../services/board.service.local"
import { boardService } from "../../services/board.service"
import { ProfileImg } from "../ProfileImg"
import { useForm } from "../../customHooks/useForm"

export function BoardDetailsHeader({ board, filterBy, viewType, setViewType }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [fields, setFields, handleChange, resetForm] = useForm({
    title: board.title,
  })

  const isPopoverOpen = Boolean(anchorEl)
  const isFilterEmpty = Object.values(filterBy).every((val) => {
    if (Array.isArray(val)) return val.length === 0
    return !val
  })
  const tasksCount = board.groups.reduce((acc, group) => {
    return acc + group.tasks.length
  }, 0)
  const boardTitleH1 = useRef(null)
  const boardTitleInput = useRef(null)

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
    e.dataTransfer.setData("member", JSON.stringify(member))
  }

  function onChangeViewType(viewType) {
    setViewType(viewType)
  }

  function handleTitleClick() {
    boardTitleH1.current.classList.add("hide")
    boardTitleInput.current.classList.remove("hide")
    boardTitleInput.current.focus()
    updateInputWidth()
  }

  function handleInputTitleBlur() {
    boardTitleH1.current.classList.remove("hide")
    boardTitleInput.current.classList.add("hide")
    if (fields.title === board.title) return
    updateCurrentBoard(null, null, {
      key: "title",
      value: fields.title,
    })
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      boardTitleInput.current.blur()
    }
    updateInputWidth()
  }

  function updateInputWidth() {
    const input = boardTitleInput.current
    input.style.width = input.value.length + 1 + "ch"
  }

  return (
    <section className="board-details-header">
      <div className="board-topbar-start">
        <div className="board-title-container">
          <h1
            className="board-details-title"
            onClick={handleTitleClick}
            ref={boardTitleH1}
          >
            {board.title}
          </h1>
          <input
            className="board-details-title hide"
            type="text"
            name="title"
            ref={boardTitleInput}
            value={fields.title}
            onChange={handleChange}
            onBlur={handleInputTitleBlur}
            onFocus={(e) => e.currentTarget.select()}
            onKeyDown={handleKeyPress}
          />
        </div>
        <Button>
          <SvgIcon
            onClick={onToggleBoardStarred}
            iconName={board.isStarred ? "starFill" : "star"}
          />
        </Button>
        <Button
          className={`board-details-header-button dynamic-button${
            viewType === "board" ? " active" : ""
          }`}
          onClick={() => onChangeViewType("board")}
        >
          <SvgIcon iconName="boardView" />
          <span>Board</span>
        </Button>
        <Button
          className={`board-details-header-button dynamic-button${
            viewType === "dashboard" ? " active" : ""
          }`}
          onClick={() => onChangeViewType("dashboard")}
        >
          <SvgIcon iconName="dashboard" />
          <span>Dashboard</span>
        </Button>
      </div>
      <div className="board-topbar-end">
        <span
          className={`filter-btns-container flex ${
            !isFilterEmpty || isPopoverOpen ? "active" : ""
          }`}
        >
          <button
            className="filter-btn button dynamic-button"
            onClick={handleClick}
          >
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
                <ProfileImg member={member} size={"md"} />
              </li>
            )
          })}
        </ul>
        <Button className={"dynamic-button"}>
          <SvgIcon iconName="more" />
        </Button>
      </div>
    </section>
  )
}
