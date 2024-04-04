import { useEffect } from "react"
import { useSelector } from "react-redux"
import { addBoard, loadBoards } from "../store/board.actions.js"
import { BoardList } from "../cmps/BoardList.jsx"
import SvgIcon from "../cmps/SvgIcon.jsx"
import { DEMO_BOARD_LIST } from "../demo/boards.js"
import { Button } from "../cmps/Button.jsx"

export function Workspace() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)

  async function onAddBoard() {
    // TODO create new board using function;
    const boardToSave = DEMO_BOARD_LIST[0]
    boardToSave.isStarred = false
    delete boardToSave._id
    await addBoard(boardToSave)
  }
  useEffect(() => {
    loadBoards()
  }, [])

  return (
    <div className="workspace-container">
      <div className="board-list-header">
        <SvgIcon iconName={"profile"} size={"md"} />
        <span>Starred Boards</span>
      </div>
      <BoardList boards={boards.filter((board) => board.isStarred)} />
      <div className="board-list-header all-boards">
        <SvgIcon iconName={"profile"} size={"md"} />
        <span>Your Boards</span>
      </div>
      <BoardList boards={boards}>
        <li className="board-item">
          <Button className="contained" onClick={onAddBoard}>
            <span>Create new board</span>
          </Button>
        </li>
      </BoardList>
    </div>
  )
}
