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
import { darken, lighten } from "polished"
import { da } from "date-fns/locale"

export function BoardDetails() {
  const params = useParams()
  const initialBoard = useSelector((storeState) => storeState.boardModule.board)
  const [taskQuickEdit, setTaskQuickEdit] = useState(null)
  const filterBy = useSelector(
    (storeState) => storeState.boardModule.boardFilterBy
  )

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
  }, [params.boardId])

  //set document title and dynamic style
  useEffect(() => {
    if (board) {
      document.title = board.title
      setDynamicStyle()
    }
    // reset dynamic style on unmount
    return () => {
      const elMainContent = document.querySelector(".board-layout")
      const elHeader = document.querySelector(".board-header")

      elMainContent.style.backgroundImage = "none"
      elHeader.style.backgroundColor = "white"
    }
  }, [board])

  function setDynamicStyle() {
    const elMainContent = document.querySelector(".board-layout")
    const elHeader = document.querySelector(".board-header")
    const elSidebar = document.querySelector(".board-sidebar")
    const { bgImg, bgColor, themeColor } = board.style

    const secondaryColor =
      themeColor == "dark" ? darken(0.01, bgColor) : lighten(0.01, bgColor)

    elMainContent.style.backgroundImage = `url(${bgImg})`
    elSidebar.style.backgroundColor = secondaryColor
    elHeader.style.backgroundColor = secondaryColor

    console.log("color", bgColor)
    console.log("darken", darken(0.2, bgColor))
  }

  if (!board) return <div>Loading..</div>

  return (
    <div className="board-details-container">
      <BoardSidebar />
      <div className="board-main-content flex column">
        <BoardDetailsHeader board={board} filterBy={filterBy} />
        <div className="board-groups-container full">
          <GroupList groups={board.groups} />
        </div>
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
