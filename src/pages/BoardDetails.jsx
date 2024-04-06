import { useEffect } from "react"
import { Outlet, useParams } from "react-router"
import { useSelector } from "react-redux"
import { loadBoard } from "../store/board.actions"
import { GroupList } from "../cmps/groups/GroupList"
import { BoardDetailsHeader } from "../cmps/BoardDetailsHeader"

export function BoardDetails() {
  const params = useParams()
  const board = useSelector((storeState) => storeState.boardModule.board)

  useEffect(() => {
    loadBoard(params.boardId)
  }, [params.boardId])

  if (!board) return <div>Loading..</div>

  //TODO - think it need to be in store?
  const boardStyle = {
    backgroundColor: board.style.backgroundColor,
    color: "white",
  }

  return (
    <div className="board-details-container" style={boardStyle}>
      <div className="board-sidebar">Sidebar</div>
      <div
        className="board-main-content flex column"
        style={{ backgroundImage: `url(${board.style.bgImage})` }}
      >
        <BoardDetailsHeader title={board.title} members={board.members} />
        <div className="board-groups-container full">
          <GroupList groups={board.groups} />
        </div>
      </div>
      <Outlet />
    </div>
  )
}
