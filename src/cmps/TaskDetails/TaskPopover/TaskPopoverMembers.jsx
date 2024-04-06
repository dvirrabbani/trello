import { Button } from "../../Button"

export function TaskPopoverMembers({ members, onUpdateMembers }) {
  return (
    <div className="task-popover-members">
      <h4 className="title">Card Members</h4>
      <ul className="clean-list flex column">
        {members?.task?.map((m) => {
          return (
            <Button
              variant="group"
              key={m._id}
              onClick={() => onUpdateMembers(m)}
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
        {members?.board?.map((m) => {
          return (
            <Button
              variant="group"
              key={m._id}
              onClick={() => onUpdateMembers(m)}
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
