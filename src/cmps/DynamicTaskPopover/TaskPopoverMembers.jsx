import { useSelector } from "react-redux"
import { Button } from "../Button"
import { updateTaskMembers } from "../../store/board.actions"
import { ProfileImg } from "../ProfileImg"

export function TaskPopoverMembers({ task, onUpdateTask }) {
  const board = useSelector((storeState) => storeState.boardModule.board)

  function onUpdateTaskMembers(member) {
    updateTaskMembers(member, task.members, task.title, onUpdateTask)
  }

  return (
    <div className="task-popover-members">
      {task.members.length > 0 && (
        <ul className="clean-list flex column">
          <h4 className="title h4">Card Members</h4>
          {task.members.map((member) => {
            return (
              <Button
                key={member.id}
                onClick={() => onUpdateTaskMembers(member)}
              >
                <ProfileImg member={member} size={"lg"} />
                <span>{member.fullName}</span>
              </Button>
            )
          })}
        </ul>
      )}
      <h4 className="title h4">Board Members</h4>
      <ul className="clean-list flex column">
        {board?.members.map((member) => {
          return (
            <Button key={member.id} onClick={() => onUpdateTaskMembers(member)}>
              <ProfileImg member={member} size={"lg"} />
              <span>{member.fullName}</span>
            </Button>
          )
        })}
      </ul>
    </div>
  )
}
