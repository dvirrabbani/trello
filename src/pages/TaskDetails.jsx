import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { useForm } from "../customHooks/useForm"
import { updateCurrentBoard } from "../store/board.actions"
import { useSelector } from "react-redux"
import { TaskDetailsHeader } from "../cmps/TaskDetails/TaskDetailsHeader"
import { TaskDetailsMain } from "../cmps/TaskDetails/TaskDetailsMain"
import { TaskDetailsSidebar } from "../cmps/TaskDetails/TaskDetailsSidebar"
import { utilService } from "../services/util.service"

export function TaskDetails() {
  const dialogRef = useRef()
  const params = useParams()
  const { groupId, taskId } = params
  const board = useSelector((storeState) => storeState.boardModule.board)
  const [task, setTask] = useState(null)
  const [fields, setFields, handleChange] = useForm({
    description: "",
  })

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
      setFields(() => ({ ...task }))
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

  function onUpdateMembers(member) {
    let membersToEdit = []
    if (task?.memberIds) {
      membersToEdit = task?.memberIds?.find((mIdx) => mIdx === member._id)
        ? task.memberIds.filter((mIdx) => mIdx !== member._id)
        : [...task.memberIds, member._id]
    } else {
      membersToEdit = [member.id]
    }
    onUpdateTask({
      key: "memberIds",
      value: [...membersToEdit],
    })
  }

  function onAddToCheckLists(title) {
    const checkListToAdd = {
      id: utilService.makeId(),
      title,
      todos: [],
    }
    onUpdateTask({
      key: "checklists",
      value: task?.checklists ? [...task?.checklists, checkListToAdd] : [],
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
    console.log({ checkListToEdit })
    checkListToEdit.todos = [
      ...checkListToEdit.todos,
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

  function onUpdateTaskLabel(labelId) {
    let labelIdsToEdit = []
    if (task?.labelIds) {
      labelIdsToEdit = task?.labelIds?.find((lIdx) => lIdx === labelId)
        ? task.labelIds.filter((lIdx) => lIdx !== labelId)
        : [...task.labelIds, labelId]
    } else {
      labelIdsToEdit = [labelId]
    }
    onUpdateTask({
      key: "labelIds",
      value: labelIdsToEdit,
    })
  }

  function onAddDescription(description) {
    onUpdateTask({
      key: "description",
      value: description,
    })
  }

  function getTaskMembers() {
    const taskMemberList = []
    task?.memberIds?.map((tmIdx) => {
      board.members?.map((m) => {
        if (tmIdx === m._id) {
          taskMemberList.push(m)
        }
      })
    })

    return taskMemberList
  }

  function getTaskLabels() {
    const taskLabelList = []
    task?.labelIds?.map((tlIdx) => {
      board.labels?.map((l) => {
        if (tlIdx === l.id) {
          taskLabelList.push(l)
        }
      })
    })

    return taskLabelList
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

  return (
    <dialog ref={dialogRef} className="task-details">
      <TaskDetailsHeader params={params} task={task} />
      <TaskDetailsMain
        params={params}
        task={task}
        labels={labels}
        fields={fields}
        handleChange={handleChange}
        members={members}
        onUpdateTask={onUpdateTask}
        onUpdateMembers={onUpdateMembers}
        onUpdateTaskLabel={onUpdateTaskLabel}
        onAddDescription={onAddDescription}
        onRemoveChecklist={onRemoveChecklist}
        onAddCheckListTodo={onAddCheckListTodo}
        onRemoveCheckListTodo={onRemoveCheckListTodo}
      />
      <TaskDetailsSidebar
        task={task}
        members={members}
        labels={labels}
        onUpdateMembers={onUpdateMembers}
        onUpdateTaskLabel={onUpdateTaskLabel}
        onAddToCheckLists={onAddToCheckLists}
      />
    </dialog>
  )
}
