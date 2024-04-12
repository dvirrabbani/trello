import { Link } from "react-router-dom"

export function BoardPreview({ id, title, style }) {
  const { bgImg } = style

  return (
    <Link to={`/board/${id}`} className="board-preview">
      <div
        className="background"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="content">
        <div className="board-title">{title}</div>
      </div>
    </Link>
  )
}
