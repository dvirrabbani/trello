import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router"
import { useSelector } from "react-redux"
import { loadBoard } from "../store/board.actions"
import { GroupList } from "../cmps/groups/GroupList"
import { BoardDetailsHeader } from "../cmps/BoardDetailsHeader"
import { eventBus } from "../services/event-bus.service"
import { TaskQuickEdit } from "../cmps/TaskQuickEdit"
import { Modal } from "../cmps/Modal"
import { BoardSidebar } from "../cmps/BoardSidebar"
import { boardService } from "../services/board.service"

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

  if (!board) return <div>Loading..</div>

  const boardStyle = {
    backgroundColor: board.style.bgColor,
    color: "white",
  }

  return (
    <div className="board-details-container" style={boardStyle}>
      <BoardSidebar />
      <div
        className="board-main-content flex column"
        style={{ backgroundImage: `url(${board.style.bgImg})` }}
      >
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
            setTaskQuickEdit={setTaskQuickEdit}
          />
        </Modal>
      )}
    </div>
  )
}
