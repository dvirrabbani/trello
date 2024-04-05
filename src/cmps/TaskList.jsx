import { Link } from "react-router-dom"
import SvgIcon from "./SvgIcon"
import { useSelector } from "react-redux"

export function TaskList({ group }) {
  return (
    <ol className="clean-list flex column task-list">
      {group.tasks.map((task) => {
        return (
          <li key={task.id}>
            <Link to={`${group.id}/${task.id}`}>
              <TaskPreview task={task} />
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

function TaskPreview({ task }) {
  function coverStyle(isFull, background) {
    const isUrl =
      background.startsWith("http://") || background.startsWith("https://")
    let coverStyle = {}

    switch (true) {
      case isFull && isUrl:
        coverStyle = { height: "150px" }
        break
      case !isFull && isUrl:
        coverStyle = { height: "200px", backgroundImage: `url(${background})` }
        break
      case !isUrl:
        coverStyle = { height: "36px", backgroundColor: background }
    }
    return coverStyle
  }

  function cardStyle(background) {
    const isUrl =
      background.startsWith("http://") || background.startsWith("https://")
    return isUrl
      ? { backgroundImage: `url(${background})` }
      : { backgroundColor: background }
  }

  return (
    <div
      className="task-preview"
      style={
        task.style && task.style.isFull ? cardStyle(task.style.background) : {}
      }
    >
      {task.style && (
        <div
          className="task-cover"
          style={coverStyle(task.style.isFull, task.style.background)}
        ></div>
      )}
      <div className="task-title">{task.title}</div>
      <div className="task-actions-badges">
        {task.description && (
          <div className="action-badge">
            <SvgIcon iconName="description" />
          </div>
        )}
        {task.checklists && <ChecklistsBadge checklists={task.checklists} />}
        {task.attachments && (
          <div className="action-badge">
            <SvgIcon iconName="attachment" />
            <span>{task.attachments.length}</span>
          </div>
        )}
      </div>
      {task.memberIds && <TaskMembers memberIds={task.memberIds} />}
    </div>
  )
}

function ChecklistsBadge({ checklists }) {
  const totalTodos = checklists.reduce((accumulator, checklist) => {
    return accumulator + checklist.todos.length
  }, 0)

  const totalDoneTodos = checklists.reduce((accumulator, checklist) => {
    return accumulator + checklist.todos.filter((todo) => todo.isDone).length
  }, 0)

  return (
    <div className="action-badge">
      <SvgIcon iconName="checkbox" />
      <span>{totalDoneTodos}</span>/<span>{totalTodos}</span>
    </div>
  )
}

function TaskMembers({ memberIds }) {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const boardMembers = board.members
  return (
    <div className="task-members">
      {memberIds.map((memberId) => (
        <TaskMember
          key={memberId}
          boardMembers={boardMembers}
          memberId={memberId}
        />
      ))}
    </div>
  )
}

function TaskMember({ boardMembers, memberId }) {
  const memberImg = boardMembers.find(
    (member) => member._id === memberId
  ).imgUrl
  const style = {
    backgroundImage: `url(${memberImg})`,
  }
  return <div className="task-member" style={style}></div>
}
