import { boardService } from "../services/board.service"
import { updateBoard } from "../store/board.actions"
import { BoardPreview } from "./boardPreview"
import SvgIcon from "./SvgIcon"

export function BoardList({ boards, children }) {
  async function onUpdateBoard(boardId, { key, value }) {
    const board = await boardService.getById(boardId)

    updateBoard(board, { key, value })
  }

  return (
    <ul className="board-list">
      {boards.map((board) => {
        const { _id, title, style } = board
        return (
          <li className="board-item" key={board._id}>
            <BoardPreview id={_id} title={title} style={style} />
            <div
              className={`board-actions${board.isStarred ? " starred-board" : " unstarred-board"}`}
              onClick={() =>
                onUpdateBoard(board._id, {
                  key: "isStarred",
                  value: !board.isStarred,
                })
              }
            >
              <button className="clean-btn">
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
