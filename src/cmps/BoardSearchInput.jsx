import { useSelector } from "react-redux"
import SvgIcon from "./SvgIcon"
import { useState } from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router"

export function BoardSearchInput() {
  const navigate = useNavigate()
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [searchBy, setSearchBy] = useState("")
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const filterBoardByText = boards?.filter((board) =>
    board.title.toLowerCase().includes(searchBy.toLowerCase())
  )

  function onSelectBoard(boardId) {
    navigate(`/board/${boardId}`)
    setIsOptionsOpen(false)
    setSearchBy("")
  }

  return (
    <section className="board-search-input">
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

      {/* Filter board by search by text */}
      {isOptionsOpen && (
        <section className="search-options">
          <span className="search-title">Recent boards</span>
          {filterBoardByText?.map((board) => (
            <Button
              className="search-option"
              onClick={() => onSelectBoard(board._id)}
            >
              <img
                className="thumbnail"
                src={board.style.bgImg}
                alt="board image"
              />
              <span>{board.title}</span>
            </Button>
          ))}
        </section>
      )}
    </section>
  )
}
