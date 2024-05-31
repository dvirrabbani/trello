import { useEffect } from "react"
import { Outlet } from "react-router"
import { BoardHeader } from "./BoardHeader"
import { loadBoards } from "../../store/board.actions"

export function BoardLayout() {
  useEffect(() => {
    loadBoards()
  }, [])

  return (
    <div className="board-layout">
      <BoardHeader />
      {<Outlet />}
    </div>
  )
}
