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
import { utilService } from "../services/util.service"
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

  //set document title and dynamic style
  useEffect(() => {
    if (board) {
      document.title = board.title
      setDynamicStyle()
    }
    // reset dynamic style on unmount
    return () => {
      resetDynamicStyle()
    }
  }, [board])

  function setDynamicStyle() {
    const elMainContent = document.querySelector(".board-layout")
    const elHeader = document.querySelector(".board-header")
    const elSidebar = document.querySelector(".board-sidebar")

    elMainContent.style.backgroundImage = `url(${board.style.bgImg})`
    elSidebar.style.backgroundColor = utilService.addOpacityToRGB(board.style.bgColor, 0.9)
    elHeader.style.backgroundColor = utilService.addOpacityToRGB(board.style.bgColor, 0.95)
  }

  function resetDynamicStyle() {
    const elMainContent = document.querySelector(".board-layout")
    const elHeader = document.querySelector(".board-header")

    elMainContent.style.backgroundImage = "none"
    elHeader.style.backgroundColor = "white"
  }

  if (!board) return <div>Loading..</div>

  return (
    <div className="board-details-container">
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
