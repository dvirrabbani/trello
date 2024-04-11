import { useSelector } from "react-redux"
import SvgIcon from "./SvgIcon"
import { BoardNavLink } from "./BoardNavLink"
import { useState } from "react"

export function BoardSearchInput() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [searchBy, setSearchBy] = useState("")
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  return (
    <section className="app-header-search-input">
      <div className="form-group flex">
        <SvgIcon iconName={"search"} />
        <input
          value={searchBy}
          type="text"
          placeholder="Search"
          onFocus={() => setIsOptionsOpen(true)}
          onChange={(ev) => setSearchBy(ev.target.value)}
        />
      </div>
      {/* TODO Replace with MUI popover  */}
      <section className="search-options">
        {/* Filter board by search by text */}
        {isOptionsOpen &&
          boards
            ?.filter((board) =>
              board.title.toLowerCase().includes(searchBy.toLowerCase())
            )
            ?.map((board) => (
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
    </section>
  )
}
