import { useState } from "react"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { DynamicTaskPopover } from "../DynamicTaskPopover/DynamicTaskPopover"

export function TaskDetailsMainHeader({ task, members, labels, onUpdateTask }) {
  const [isOpen, setIsOpen] = useState(false)
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
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <span>{lt.title}</span>
              </span>
            )
          })}
          <Button variant={"contained"}>
            <SvgIcon iconName="plus" />
          </Button>
        </div>
        {isOpen && (
          <DynamicTaskPopover
            type={"Labels"}
            title={"Labels"}
            task={task}
            onClose={() => setIsOpen(false)}
            onUpdateTask={onUpdateTask}
          />
        )}
      </div>
    </section>
  )
}
