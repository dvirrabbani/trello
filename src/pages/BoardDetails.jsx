import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router"
import { useSelector } from "react-redux"
import { loadBoard } from "../store/board.actions"
import { GroupList } from "../cmps/Group/GroupList"
import { BoardDetailsHeader } from "../cmps/BoardDetails/BoardDetailsHeader"
import { eventBus } from "../services/event-bus.service"
import { TaskQuickEdit } from "../cmps/BoardDetails/TaskQuickEdit"
import { Modal } from "../cmps/Modal"
import { BoardSidebar } from "../cmps/BoardDetails/BoardSidebar"
import { boardService } from "../services/board.service"
import { saveUserRecentBoards } from "../store/user.actions"
import BoarDashboardView from "../cmps/board/view/BoarDashboardView"

export function BoardDetails() {
  const params = useParams()
  const initialBoard = useSelector((storeState) => storeState.boardModule.board)
  const filterBy = useSelector((storeState) => storeState.boardModule.boardFilterBy)
  const [taskQuickEdit, setTaskQuickEdit] = useState(null)
  const [viewType, setViewType] = useState("board")

  const board = boardService.filteredBoard(initialBoard, filterBy)

  useEffect(() => {
    const unsubscribe = eventBus.on("quickEditTask", (data) => {
      setTaskQuickEdit(data)
    })
    return () => {
      unsubscribe()
    }
  })

  useEffect(() => {
    loadBoard(params.boardId)
    saveUserRecentBoards(params.boardId)
    setViewType("board")
  }, [params.boardId])

  //set document ui
  useEffect(() => {
    if (board) {
      document.title = board.title
      document.body.dataset.theme = board.style.themeColor
      boardService.setBoardDynamicStyle(board.style)
    }
    return () => {
      boardService.resetDynamicStyle()
    }
  }, [board])


  if (!board) return <div>Loading..</div>

  return (
    <div
      className="board-details-container bg-image-cover"
      style={{ backgroundImage: `url(${board.style.bgImg})` }}
    >
      <BoardSidebar />
      <div className="board-main-content flex column">
        <BoardDetailsHeader board={board} filterBy={filterBy} viewType={viewType} setViewType={setViewType} />

        <div className="board-groups-container full" style={viewType === "dashboard" ? { display: "none" } : undefined}>
          <GroupList groups={board.groups} />
        </div>
        {viewType === "dashboard" && <BoarDashboardView board={initialBoard} />}
      </div>
      <Outlet />
      {taskQuickEdit && (
        <Modal cb={setTaskQuickEdit}>
          <TaskQuickEdit
            groupId={taskQuickEdit.groupId}
            task={taskQuickEdit.task}
            boundaries={taskQuickEdit.boundaries}
            closeQuickEdit={() => setTaskQuickEdit(null)}
          />
        </Modal>
      )}
    </div>
  )
}
