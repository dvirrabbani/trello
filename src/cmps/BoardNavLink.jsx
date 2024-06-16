import { NavLink, useNavigate, useParams } from "react-router-dom"
import { store } from "../store/store"
import { boardService } from "../services/board.service"

export function BoardNavLink({ board }) {
  const navigate = useNavigate()
  const { boardId } = useParams()

  function goToBoard() {
    store.dispatch({
      type: "SET_BOARD_FILTER",
      filterBy: boardService.getDefaultFilter(),
    })
    navigate(`/board/${board._id}`)
  }

  return (
    <div
      className={`board-nav-link ${boardId == board._id ? "active" : ""}`}
      onClick={goToBoard}
    >
      <img className="thumbnail" src={board.style.bgImg} alt="board image" />
      <span>{board.title}</span>
    </div>
  )
}
