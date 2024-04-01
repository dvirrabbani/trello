import { useEffect } from "react"
import { Outlet, useParams } from "react-router"
import { useSelector } from "react-redux"
import { GroupList } from "../cmps/GroupList"
import { loadBoard } from "../store/board.actions"
import { BoardDetailsHeader } from "../cmps/BoardDetailsHeader"

export function BoardDetails() {
  const params = useParams()
  const board = useSelector((storeState) => storeState.boardModule.board)

  useEffect(() => {
    loadBoard(params.boardId)
  }, [params.boardId])

  if (!board) return <div>Loading..</div>

  //TODO - think it need to be in store
  const boardStyle = {
    backgroundColor: board.style.backgroundColor,
    color: "white",
  }

  return (
    <div className="board-details-container" style={boardStyle}>
      <div className="board-sidebar">Sidebar</div>
      <div className="board-main-content flex column">
        <BoardDetailsHeader title={board.title} />
        <div className="board-groups-container full">
          <GroupList groups={board.groups} />
        </div>
      </div>
      <Outlet />
    </div>
  )
}
