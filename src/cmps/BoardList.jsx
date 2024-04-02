import { BoardPreview } from "./boardPreview"
import { getActionUpdateBoard } from "../store/board.actions"
import SvgIcon from "./SvgIcon"

export function BoardList({ boards, children }) {
  async function onUpdateBoard(boardToSave) {
    await getActionUpdateBoard(boardToSave)
  }

  return (
    <ul className="board-list">
      {boards.map((board) => {
        const { _id, title, style } = board
        return (
          <li className="board-item" key={board._id}>
            <BoardPreview id={_id} title={title} style={style} />
            <div className="board-actions">
              <button
                className="clean-btn "
                onClick={() =>
                  onUpdateBoard({ ...board, isStarred: !board.isStarred })
                }
              >
                <SvgIcon iconName={board.isStarred ? "starFill" : "star"} />
              </button>
            </div>
          </li>
        )
      })}
      {children}
    </ul>
  )
}
