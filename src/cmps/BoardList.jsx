import { Link } from "react-router-dom"
import SvgIcon from "./SvgIcon"

export function BoardList({ boards }) {
  console.log("boards list", boards)
  return (
    <ul>
      {boards.map((board) => {
        return (
          <li key={board._id}>
            <Link to={`/board/${board._id}`}>
              <div className="board-title">{board.title}</div>
              <div className="board-starred">
                <SvgIcon iconName={board.isStarred ? "starFill" : "star"} />
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
