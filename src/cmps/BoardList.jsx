import { BoardPreview } from "./boardPreview"
import { updateBoard } from "../store/board.actions"
import SvgIcon from "./SvgIcon"

export function BoardList({ boards, children }) {
  async function onUpdateBoard(board, { key, value }) {
    await updateBoard(board, null, null, { key, value })
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
                  onUpdateBoard(board, {
                    key: "isStarred",
                    value: !board.isStarred,
                  })
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
