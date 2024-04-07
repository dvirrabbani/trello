import { useSelector } from "react-redux"
import { Button } from "../Button"
import { updateTaskMemberIds } from "../../store/board.actions"

export function TaskPopoverMembers({ task, onUpdateTask }) {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const taskMembers = board.members?.filter((obj) =>
    task?.memberIds?.includes(obj._id)
  )
  function onUpdateTaskMembers(memberId) {
    updateTaskMemberIds(memberId, task?.memberIds, onUpdateTask)
  }

  return (
    <div className="task-popover-members">
      <h4 className="title">Card Members</h4>
      <ul className="clean-list flex column">
        {taskMembers?.map((m) => {
          return (
            <Button
              variant="group"
              key={m._id}
              onClick={() => onUpdateTaskMembers(m._id)}
            >
              <img
                style={{ width: "30px" }}
                key={m._id}
                src={m.imgUrl}
                alt=""
              />
              <span>{m.fullname}</span>
            </Button>
          )
        })}
      </ul>
      <h4 className="title">Board Members</h4>
      <ul className="clean-list flex column">
        {board?.members.map((m) => {
          return (
            <Button
              variant="group"
              key={m._id}
              onClick={() => onUpdateTaskMembers(m._id)}
            >
              <img
                style={{ width: "30px" }}
                key={m._id}
                src={m.imgUrl}
                alt=""
              />
              <span>{m.fullname}</span>
            </Button>
          )
        })}
      </ul>
    </div>
  )
}
