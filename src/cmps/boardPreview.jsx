import { Link } from "react-router-dom";

export function BoardPreview({ id, title, style }) {
  const { bgImage } = style;
  return (
    <Link
      to={`/board/${id}`}
      className="board-preview"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="board-title">{title}</div>
    </Link>
  );
}
