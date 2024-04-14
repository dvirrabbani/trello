import { useSelector } from "react-redux"
import SvgIcon from "./SvgIcon"
import { BoardNavLink } from "./BoardNavLink"
import { useState } from "react"

export function BoardSearchInput() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [searchBy, setSearchBy] = useState("")
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const filterBoardByText = boards?.filter((board) =>
    board.title.toLowerCase().includes(searchBy.toLowerCase())
  )

  function onBlur() {
    setIsOptionsOpen(false)
    setSearchBy("")
  }

  return (
    <section className="board-search-input">
      <div className="form-group flex">
        <SvgIcon iconName={"search"} />
        <input
          onBlur={onBlur}
          value={searchBy}
          type="text"
          placeholder="Search"
          onFocus={() => setIsOptionsOpen(true)}
          onChange={(ev) => setSearchBy(ev.target.value)}
        />
      </div>

      {/* Filter board by search by text */}
      {isOptionsOpen && (
        <section className="search-options">
          <span className="search-title">Recent boards</span>
          {filterBoardByText?.map((board) => (
            <div
              className="search-option"
              key={board._id}
              onClick={() => {
                setIsOptionsOpen(false)
              }}
            >
              <BoardNavLink board={board} />
            </div>
          ))}
        </section>
      )}
    </section>
  )
}
