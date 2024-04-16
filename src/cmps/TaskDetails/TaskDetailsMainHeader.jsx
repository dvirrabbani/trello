import { useRef, useState } from "react"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { DynamicTaskPopover } from "../DynamicTaskPopover/DynamicTaskPopover"
import dayjs from "dayjs"
import { Popover } from "../Popover"
import { ProfileImg } from "../ProfileImg"

export function TaskDetailsMainHeader({ task, members, labels, onUpdateTask }) {
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

  return (
    <section className="task-details-main-header flex">
      {/* Task Members */}
      {members?.task?.length > 0 && (
        <div className="main-header-card">
          <h4 className="h4">Members</h4>
          <div className="member-list flex">
            {members.task?.map((member) => (
              <ProfileImg key={member._id} imgUrl={member.imgUrl} size={"lg"} />
            ))}
            <Button variant={"contained"} shape={"circle"}>
              <SvgIcon iconName="plus" />
            </Button>
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
            <Button variant={"contained"}>
              <SvgIcon iconName="plus" />
            </Button>
          </div>
        </div>
      )}
      {/* Dates */}
      {task?.dueDate && (
        <div className="main-header-card">
          <h4 className="h4">Due Dates</h4>
          <Button onClick={openDatesPopover} variant="contained">
            {dayjs(task?.dueDate).format("MMM D YYYY [at] h:mm A")}
          </Button>
          <Popover
            id={Boolean(datePopover) ? "popover-dates-id" : undefined}
            open={Boolean(datePopover)}
            anchorEl={datePopover}
            onClose={closeDatesPopover}
            title={"Labels"}
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
