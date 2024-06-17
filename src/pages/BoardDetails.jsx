import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router"
import { useSelector } from "react-redux"
import {
  getActionUpdateBoard,
  getActionUpdateCurrentBoard,
  loadBoard,
} from "../store/board.actions"
import { GroupList } from "../cmps/Group/GroupList"
import { BoardDetailsHeader } from "../cmps/BoardDetails/BoardDetailsHeader"
import { eventBus } from "../services/event-bus.service"
import { TaskQuickEdit } from "../cmps/BoardDetails/TaskQuickEdit"
import { Modal } from "../cmps/Modal"
import { BoardSidebar } from "../cmps/BoardDetails/BoardSidebar"
// import { boardService } from "../../../services/board.service.local"
import { boardService } from "../services/board.service"
import BoarDashboardView from "../cmps/board/view/BoarDashboardView"
import { Loader } from "../cmps/shared/Loader"
import {
  SOCKET_EMIT_JOIN_BOARD,
  SOCKET_EMIT_LEAVE_BOARD,
  SOCKET_EVENT_UPDATE_BOARD,
  socketService,
} from "../services/socket.service"
import { store } from "../store/store"
import { BoardMenu } from "../cmps/BoardDetails/BoardMenu"

export function BoardDetails() {
  const params = useParams()
  const initialBoard = useSelector((storeState) => storeState.boardModule.board)
  const filterBy = useSelector(
    (storeState) => storeState.boardModule.boardFilterBy
  )
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [taskQuickEdit, setTaskQuickEdit] = useState(null)
  const [viewType, setViewType] = useState("board")
  const [boardMenuIsOpen, setBoardMenuIsOpen] = useState(false)

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
      document.title = "Treiio"
      boardService.resetDynamicStyle()
    }
  }, [board])

  //join board socket
  //Q: cleanup?
  useEffect(() => {
    if (board) {
      socketService.emit(SOCKET_EMIT_JOIN_BOARD, board._id)
    }
    return () => {
      if (board) {
        socketService.emit(SOCKET_EMIT_LEAVE_BOARD, board._id)
      }
    }
  }, [board])

  useEffect(() => {
    if (board) {
      socketService.on(SOCKET_EVENT_UPDATE_BOARD, (updatedBoard) => {
        store.dispatch(getActionUpdateCurrentBoard(updatedBoard))
      })
    }
    return () => {
      socketService.off(SOCKET_EVENT_UPDATE_BOARD)
    }
  }, [board])

  function onToggleBoardMenu() {
    setBoardMenuIsOpen(!boardMenuIsOpen)
  }

  if (!board) return <Loader />

  return (
    <div
      className="board-details-container bg-image-cover"
      style={{ backgroundImage: `url(${board.style.bgImg})` }}
    >
      <BoardSidebar />
      <div className="board-main-content flex column">
        <BoardDetailsHeader
          board={board}
          filterBy={filterBy}
          viewType={viewType}
          setViewType={setViewType}
          onToggleBoardMenu={onToggleBoardMenu}
        />

        <div
          className="board-groups-container full"
          style={viewType === "dashboard" ? { display: "none" } : undefined}
        >
          <GroupList groups={board.groups} />
        </div>
        {viewType === "dashboard" && <BoarDashboardView board={initialBoard} />}
      </div>
      <BoardMenu
        boardMenuIsOpen={boardMenuIsOpen}
        onToggleBoardMenu={onToggleBoardMenu}
      />
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
