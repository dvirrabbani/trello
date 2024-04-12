import { NavLink } from "react-router-dom"

export function BoardNavLink({ board }) {
  return (
    <NavLink className={"board-nav-link"} to={`/board/${board._id}`}>
      <img className="thumbnail" src={board.style.bgImg} alt="board image" />
      <span>{board.title}</span>
    </NavLink>
  )
}
