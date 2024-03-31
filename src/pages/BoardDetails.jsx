import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router"
import { boardService } from "../services/board.service"
import { useSelector } from "react-redux"
import { GroupList } from "../cmps/GroupList"

export function BoardDetails() {
  const board = useSelector((storeState) => storeState.boardModule.boards[0])
  //TODO - load board id from where?

  // const params = useParams()
  // const [board, setBoard] = useState(null)

  // useEffect(() => {
  //   loadBoard()
  // }, [])

  // async function loadBoard() {
  //   const board = await boardService.getById(params.boardId)
  //   setBoard(board)
  // }

  // if (!board) return <div>Loading..</div>

  return (
    <div className="board-details-container">
      <div className="board-sidebar">Sidebar</div>
      <div className="board-main-content">
        <div className="board-header">{board.title}</div>
        <div className="board-groups-container">
          <GroupList groups={board.groups} />
        </div>
      </div>
      <Outlet />
    </div>
  )
}
