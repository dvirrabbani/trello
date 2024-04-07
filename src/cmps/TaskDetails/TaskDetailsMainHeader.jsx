import { useState } from "react"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { DynamicTaskPopover } from "../DynamicTaskPopover/DynamicTaskPopover"
import dayjs from "dayjs"

export function TaskDetailsMainHeader({ task, members, labels, onUpdateTask }) {
  const [isLabelPopOverOpen, setIsLabelPopOverOpen] = useState(false)
  const [isDatePopoverOpen, setIsDatePopoverOpen] = useState(false)
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
          <Button variant={"contained"} shape={"circle"}>
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
                onClick={() => setIsLabelPopOverOpen((prev) => !prev)}
              >
                <span>{lt.title}</span>
              </span>
            )
          })}
          <Button variant={"contained"} shape={"circle"}>
            <SvgIcon iconName="plus" />
          </Button>
        </div>
        {isLabelPopOverOpen && (
          <DynamicTaskPopover
            type={"Labels"}
            title={"Labels"}
            task={task}
            onClose={() => setIsLabelPopOverOpen(false)}
            onUpdateTask={onUpdateTask}
          />
        )}
      </div>
      {/* Dates */}
      {task?.dueDate && (
        <div className="main-header-card">
          <h4>Due Dates</h4>
          <input type="checkbox" />
          <Button
            variant="contained"
            onClick={() => setIsDatePopoverOpen((prev) => !prev)}
          >
            {dayjs(task?.dueDate).format("MMM D YYYY [at] h:mm A")}
          </Button>
          {isDatePopoverOpen && (
            <DynamicTaskPopover
              type={"Dates"}
              title={"Dates"}
              task={task}
              onClose={() => setIsDatePopoverOpen(false)}
              onUpdateTask={onUpdateTask}
            />
          )}
        </div>
      )}
    </section>
  )
}
