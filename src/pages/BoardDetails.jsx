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
import { el } from "date-fns/locale"
import { green } from "@mui/material/colors"
import { utilService } from "../services/util.service"

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
  }, [params.boardId])

  //set document title and dynamic style
  useEffect(() => {
    if (board) {
      document.title = board.title
      setDynamicStyle()
    }
    // reset dynamic style on unmount
    return () => {
      const elMainContent = document.querySelector(".main-app")
      const elHeader = document.querySelector(".app-header")

      elMainContent.style.backgroundImage = "none"
      elHeader.style.backgroundColor = "white"
    }
  }, [board])

  function setDynamicStyle() {
    const elMainContent = document.querySelector(".main-app")
    const elHeader = document.querySelector(".app-header")
    const elSidebar = document.querySelector(".board-sidebar")

    elMainContent.style.backgroundImage = `url(${board.style.bgImg})`
    elSidebar.style.backgroundColor = utilService.addOpacityToRGB(
      board.style.bgColor,
      0.9
    )
    elHeader.style.backgroundColor = utilService.addOpacityToRGB(
      board.style.bgColor,
      0.95
    )
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
