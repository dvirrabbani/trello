import { useRef, useState } from "react"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { DynamicTaskPopover } from "../DynamicTaskPopover/DynamicTaskPopover"
import dayjs from "dayjs"
import { Popover } from "../Popover"
import { ProfileImg } from "../ProfileImg"
import { ButtonDynamicTaskPopover } from "../ButtonDynamicTaskPopover"

export function TaskDetailsMainHeader({ task, labels, onUpdateTask }) {
  const [datePopover, setDatePopover] = useState(null)
  const [labelPopover, setLabelPopover] = useState(null)
  const elListLabelRef = useRef(null)

  function openLabelPopover() {
    setLabelPopover(elListLabelRef.current)
  }

  function closeLabelPopover() {
    setLabelPopover(null)
  }

  function openDatesPopover(ev) {
    setDatePopover(ev.currentTarget)
  }

  function closeDatesPopover() {
    setDatePopover(null)
  }

  function onToggleIsDueDateCompleted() {
    onUpdateTask({
      key: "dueDate",
      value: { ...task.dueDate, isCompleted: !task.dueDate.isCompleted },
    })
  }

  return (
    <section className="task-details-main-header">
      {/* Task Members */}
      {task?.members.length > 0 && (
        <div className="main-header-card">
          <h4 className="h4">Members</h4>
          <div className="member-list flex">
            {task?.members?.map((member) => (
              <ProfileImg key={member.id} imgUrl={member.imgUrl} size={"lg"} />
            ))}
            <ButtonDynamicTaskPopover
              variant={"contained"}
              iconName={"plus"}
              shape={"circle"}
              type={"Members"}
              onUpdateTask={onUpdateTask}
              task={task}
              popoverId={"labels-popover-id"}
              popoverTitle={"Members"}
            />
          </div>
        </div>
      )}
      {/* Labels */}
      {labels?.task?.length > 0 && (
        <div className="main-header-card">
          <h4 className="h4">Labels</h4>
          <div className="labels-list" ref={elListLabelRef}>
            {labels?.task.map((lt) => {
              return (
                <Button
                  key={lt.id}
                  onClick={openLabelPopover}
                  className={"label-list-button"}
                  style={{
                    backgroundColor: labels.board.find((lb) => lb.id === lt.id)
                      .bgColor,
                  }}
                >
                  {lt.title && <span>{lt.title}</span>}
                </Button>
              )
            })}
            <Popover
              id={Boolean(labelPopover) ? "popover-labels-id" : undefined}
              open={Boolean(labelPopover)}
              anchorEl={labelPopover}
              onClose={closeLabelPopover}
              title={"Labels"}
            >
              <DynamicTaskPopover
                type={"Labels"}
                task={task}
                onClose={closeLabelPopover}
                onUpdateTask={onUpdateTask}
              />
            </Popover>
            <Button variant={"contained"} onClick={openLabelPopover}>
              <SvgIcon iconName="plus" />
            </Button>
          </div>
        </div>
      )}
      {/* Dates */}
      {task?.dueDate?.date && (
        <div className="main-header-card">
          <h4 className="h4">Due date</h4>

          <div className="flex align-center">
            <input
              type="checkbox"
              checked={task.dueDate.isCompleted}
              onChange={onToggleIsDueDateCompleted}
            />
            <Button
              className={"main-header-card-due-date-button"}
              onClick={openDatesPopover}
              variant="contained"
            >
              {dayjs(task.dueDate.date).format("MMM D YYYY [at] h:mm A")}
              {task.dueDate.isCompleted && (
                <span className="due-date-badge">Complete</span>
              )}
              <SvgIcon iconName={"arrow"} />
            </Button>
            <Popover
              id={Boolean(datePopover) ? "popover-dates-id" : undefined}
              open={Boolean(datePopover)}
              anchorEl={datePopover}
              onClose={closeDatesPopover}
              title={"Dates"}
            >
              <DynamicTaskPopover
                type={"Dates"}
                title={"Dates"}
                task={task}
                onClose={closeDatesPopover}
                onUpdateTask={onUpdateTask}
              />
            </Popover>
          </div>
        </div>
      )}
      {/* Notifications */}
      <div className="main-header-card">
        <h4 className="h4">Notifications</h4>
        <Button variant={"contained"}>
          <SvgIcon iconName="eye" />
          <span>Watch</span>
        </Button>
      </div>
    </section>
  )
}
