import { DEMO_BOARD_LIST } from "../demo/boards"
import { BoardPreview } from "./boardPreview"
import { getActionAddBoard, getActionUpdateBoard } from "../store/board.actions"
import SvgIcon from "./SvgIcon"

export function BoardList({ boards }) {
  async function onUpdateBoard(boardToSave) {
    await getActionUpdateBoard(boardToSave)
  }

  async function onAddBoard() {
    // TODO create new board using function;
    const boardToSave = DEMO_BOARD_LIST[0]
    delete boardToSave._id
    await getActionAddBoard(boardToSave)
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
      <li className="board-item">
        <button className="btn-secondary" onClick={onAddBoard}>
          <span>Create new board</span>
        </button>
      </li>
    </ul>
  )
}
