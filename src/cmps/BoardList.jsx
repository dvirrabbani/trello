import { BoardPreview } from "./boardPreview";
import SvgIcon from "./SvgIcon";

export function BoardList({ boards }) {
  return (
    <ul className="board-list">
      {boards.map((board) => {
        const { _id, title, style } = board;
        return (
          <li className="board-item" key={board._id}>
            <BoardPreview id={_id} title={title} style={style} />
            <div className="board-actions">
              <SvgIcon iconName={board.isStarred ? "starFill" : "star"} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
