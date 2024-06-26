import { useRef, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { useSelector } from "react-redux"
import { useClickedOutside } from "../customHooks/useClickOutside"
import SvgIcon from "./SvgIcon"
import { Button } from "./Button"

export function BoardSearchInput() {
  const navigate = useNavigate()
  const params = useParams()
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const searchRef = useRef()
  const [searchBy, setSearchBy] = useState("")
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const filterBoardByText = boards?.filter((board) => board.title.toLowerCase().includes(searchBy.toLowerCase()))

  function onSelectBoard(boardId) {
    navigate(`/board/${boardId}`)
    setIsOptionsOpen(false)
    setSearchBy("")
  }

  function onClose() {
    setIsOptionsOpen(false)
  }

  useClickedOutside(searchRef, onClose)

  return (
    <section className={`board-search-input${Object.keys(params).length === 0 ? " board-index-search" : ""}`}>
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
        <section className="search-options" ref={searchRef}>
          <span className="search-title">Recent boards</span>
          {filterBoardByText?.map((board) => (
            <Button key={board._id} className="search-option" onClick={() => onSelectBoard(board._id)}>
              <img className="thumbnail" src={board.style.bgImg} alt="board image" />
              <span>{board.title}</span>
            </Button>
          ))}
        </section>
      )}
    </section>
  )
}
