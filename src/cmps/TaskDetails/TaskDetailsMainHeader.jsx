import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function TaskDetailsMainHeader({
  task,
  members,
  labels,
  onUpdateMembers,
  onUpdateTaskLabel,
}) {
  return (
    <section className="task-details-main-header flex">
      {/* Task Members */}
      <div className="main-header-card">
        <h4>Members</h4>
        <div className="member-list flex">
          {members?.task?.map((m) => {
            return (
              <img
                style={{ width: "32px" }}
                key={m._id}
                src={m.imgUrl}
                alt=""
              />
            )
          })}
          <Button variant={"contained"}>
            <SvgIcon iconName="plus" />
          </Button>
        </div>
        <div className="members-edit">
          <h3>Board members</h3>
          <div>
            {members?.task?.map((m) => {
              return (
                <Button key={m._id} onClick={() => onUpdateMembers(m)}>
                  <img
                    style={{ width: "50px" }}
                    key={m._id}
                    src={m.imgUrl}
                    alt=""
                  />
                </Button>
              )
            })}
          </div>
        </div>
      </div>
      {/* Labels */}
      <div className="main-header-card">
        <h4>Labels</h4>
        <div className="labels-list flex">
          {labels?.task.map((lt) => {
            return (
              <span
                key={lt.id}
                style={{
                  backgroundColor: labels.board.find((lb) => lb.id === lt.id)
                    .color,
                  cursor: "pointer",
                }}
                onClick={() => onUpdateTaskLabel(lt.id)}
              >
                <span>{lt.title}</span>
              </span>
            )
          })}
          <Button variant={"contained"}>
            <SvgIcon iconName="plus" />
          </Button>
        </div>
      </div>
    </section>
  )
}
