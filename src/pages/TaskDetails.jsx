import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { updateCurrentBoard } from "../store/board.actions"
import { useSelector } from "react-redux"
import { TaskDetailsHeader } from "../cmps/TaskDetails/TaskDetailsHeader"
import { TaskDetailsSidebar } from "../cmps/TaskDetails/TaskDetailsSidebar"
import { TaskDetailsMainHeader } from "../cmps/TaskDetails/TaskDetailsMainHeader"
import { TaskDetailsDescription } from "../cmps/TaskDetails/TaskDetailsDescription"
import { TaskDetailsChecklist } from "../cmps/TaskDetails/TaskDetailsCheckList"
import { TaskDetailsActivities } from "../cmps/TaskDetails/TaskDetailsActivities"
import { utilService } from "../services/util.service"
import { TaskDetailsAttachments } from "../cmps/TaskDetails/TaskDetailsAttachments"
import { Loader } from "../cmps/shared/Loader"
import { ClickAwayListener } from "@mui/material"
import { userService } from "../services/user.service"

export function TaskDetails() {
  const params = useParams()
  const navigate = useNavigate()
  const { groupId, taskId } = params
  const board = useSelector((storeState) => storeState.boardModule.board)
  const [task, setTask] = useState(null)

  useEffect(() => {
    loadTask()
  }, [params.taskId])

  async function loadTask() {
    try {
      const group = board.groups?.find((g) => g.id === groupId)
      const task = group.tasks?.find((t) => t.id === taskId)
      setTask(task)
    } catch (err) {
      console.log("Cannot load Task", err)
      throw err
    }
  }

  async function onUpdateTask({ key, value }, activity) {
    updateCurrentBoard(
      groupId,
      taskId,
      {
        key,
        value,
      },
      activity
    )
  }

  function onRemoveChecklist(checklistId) {
    onUpdateTask({
      key: "checklists",
      value: task.checklists.filter((c) => c.id !== checklistId),
    })
  }

  function onAddCheckListTodo(checklistId, todo) {
    const checkListToEdit = task?.checklists?.find((c) => c.id === checklistId)
    checkListToEdit.todos = [
      ...(checkListToEdit?.todos || []),
      { id: `todo${utilService.makeId()}`, title: todo.title, isDone: false },
    ]

    onUpdateTask({
      key: "checklists",
      value: task.checklists.map((c) =>
        c.id === checklistId ? checkListToEdit : c
      ),
    })
  }

  function onRemoveCheckListTodo(checklistId, todoId) {
    const checklistToEdit = task?.checklists?.find((c) => c.id === checklistId)
    checklistToEdit.todos = checklistToEdit.todos.filter((t) => t.id !== todoId)

    task?.checklists.map((checklist) =>
      checklist.id === checklistId ? checklistToEdit : checklist
    )

    onUpdateTask({
      key: "checklists",
      value: task?.checklists,
    })
  }
  function onUpdateCheckListTodo(checklistId, todoId, fieldsToUpdate) {
    const checklist = task?.checklists?.find((c) => c.id === checklistId)
    const TodosToEdit = checklist?.todos.map((t) => {
      return t.id === todoId ? { ...t, ...fieldsToUpdate } : t
    })

    onUpdateTask({
      key: "checklists",
      value: task?.checklists.map((checklist) => {
        if (checklist.id === checklistId) {
          checklist.todos = TodosToEdit
        }
        return checklist
      }),
    })
  }

  function onUpdateTaskDescription(description) {
    onUpdateTask({
      key: "description",
      value: description,
    })
  }

  function getTaskLabels() {
    return board.labels?.filter((obj) => task?.labelIds?.includes(obj.id))
  }

  function onRemoveComment(commentId, taskComments) {
    onUpdateTask({
      key: "comments",
      value: taskComments.filter((c) => c.id !== commentId),
    })
  }

  function onAddComment(comment, taskComments) {
    const loggedInUser = userService.getLoggedinUser()
    const createByMember = {
      id: loggedInUser._id,
      fullName: loggedInUser.fullName,
      imgUrl: loggedInUser.imgUrl,
    }
    onUpdateTask({
      key: "comments",
      value: [
        {
          id: `c${utilService.makeId()}`,
          createdAt: Date.now(),
          txt: comment.txt,
          byMember: createByMember,
        },
        ...taskComments,
      ],
    })
  }

  function onUpdateComment(comment, taskComments) {
    onUpdateTask({
      key: "comments",
      value: taskComments.map((tc) => (tc.id === comment.id ? comment : tc)),
    })
  }

  function handleClickAway() {
    navigate(`/board/${params.boardId}`)
  }

  const labels = { board: board.labels, task: getTaskLabels() }

  if (!task) {
    return (
      <div className="task-details-container">
        <div className="task-detail-wrapper loading">
          <Loader />
        </div>
      </div>
    )
  }

  return (
    <div className="task-details-container">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="task-detail-wrapper">
          <div className="task-details">
            <TaskDetailsHeader
              params={params}
              task={task}
              onUpdateTask={onUpdateTask}
            />
            <div className="task-details-main-container">
              <main className="task-details-main full">
                <TaskDetailsMainHeader
                  task={task}
                  labels={labels}
                  onUpdateTask={onUpdateTask}
                />
                <TaskDetailsDescription
                  description={task.description}
                  onUpdateTask={onUpdateTask}
                  onUpdateTaskDescription={onUpdateTaskDescription}
                />
                <TaskDetailsChecklist
                  checklists={task.checklists}
                  onRemoveChecklist={onRemoveChecklist}
                  onAddCheckListTodo={onAddCheckListTodo}
                  onRemoveCheckListTodo={onRemoveCheckListTodo}
                  onUpdateCheckListTodo={onUpdateCheckListTodo}
                  onUpdateTask={onUpdateTask}
                />

                {task?.attachments.length > 0 && (
                  <TaskDetailsAttachments
                    task={task}
                    onUpdateTask={onUpdateTask}
                  />
                )}
                <TaskDetailsActivities
                  task={task}
                  boardMembers={board.members}
                  // filter board activities by task
                  activities={
                    board?.activities.filter(
                      (activity) => activity?.taskId === task.id
                    ) || []
                  }
                  onRemoveComment={onRemoveComment}
                  onAddComment={onAddComment}
                  onUpdateComment={onUpdateComment}
                />
              </main>
              <TaskDetailsSidebar task={task} onUpdateTask={onUpdateTask} />
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  )
}
