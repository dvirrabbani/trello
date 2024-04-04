import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function TaskDetailsMainHeader({ task, members, onUpdateMembers }) {
  const taskMembers = getTaskMembers()

  function getTaskMembers() {
    const taskMemberList = []
    task?.memberIds?.map((tmIdx) => {
      members?.map((m) => {
        if (tmIdx === m._id) {
          taskMemberList.push(m)
        }
      })
    })

    return taskMemberList
  }

  return (
    <section className="task-details-main-header">
      {/* Task Members */}
      <div className="main-header-card">
        <h4>Members</h4>
        <div className="member-list flex">
          {taskMembers?.map((m) => {
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
            {members?.map((m) => {
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
    </section>
  )
}
