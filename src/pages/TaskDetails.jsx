import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { updateCurrentBoard } from "../store/board.actions"
import { useSelector } from "react-redux"
import { TaskDetailsHeader } from "../cmps/TaskDetails/TaskDetailsHeader"
import { TaskDetailsSidebar } from "../cmps/TaskDetails/TaskDetailsSidebar"
import { TaskDetailsMainHeader } from "../cmps/TaskDetails/TaskDetailsMainHeader"
import { TaskDetailsDescription } from "../cmps/TaskDetails/TaskDetailsDescription"
import { TaskDetailsChecklist } from "../cmps/TaskDetails/TaskDetailsCheckList"
import { utilService } from "../services/util.service"

export function TaskDetails() {
  const dialogRef = useRef()
  const params = useParams()
  const { groupId, taskId } = params
  const board = useSelector((storeState) => storeState.boardModule.board)
  const [task, setTask] = useState(null)

  useEffect(() => {
    toggleDialog()
    loadTask()
  }, [params.taskId])

  function toggleDialog() {
    if (!dialogRef.current) {
      return
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  async function loadTask() {
    try {
      const group = board.groups?.find((g) => g.id === groupId)
      const task = group.tasks?.find((t) => t.id === taskId)
      setTask(() => task)
    } catch (err) {
      console.log("Cannot load Task", err)
      throw err
    }
  }

  async function onUpdateTask({ key, value }) {
    updateCurrentBoard(groupId, taskId, {
      key,
      value,
    })
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
      { id: utilService.makeId(), title: todo.title, isDone: false },
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

  function getTaskMembers() {
    return board.members?.filter((obj) => task?.memberIds?.includes(obj._id))
  }

  function getTaskLabels() {
    return board.labels?.filter((obj) => task?.labelIds?.includes(obj.id))
  }

  if (!task) {
    return (
      <dialog ref={dialogRef} className="task-details">
        loading
      </dialog>
    )
  }
  const labels = { board: board.labels, task: getTaskLabels() }
  const members = { board: board.members, task: getTaskMembers() }

  if (!task) {
    return "loading..."
  }

  return (
    <dialog ref={dialogRef} className="task-details">
      <TaskDetailsHeader params={params} task={task} />
      <div className="task-details-main">
        <TaskDetailsMainHeader
          task={task}
          labels={labels}
          members={members}
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
        />
        {/* <TaskDetailsAttachments /> */}
        {/* <TaskDetailsActivities /> */}
      </div>
      <TaskDetailsSidebar task={task} onUpdateTask={onUpdateTask} />
    </dialog>
  )
}
