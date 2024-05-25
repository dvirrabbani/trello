import { DEMO_BOARD_LIST } from "../demo/boards.js"
import { activityService } from "./acitivity.service.js"
import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"

const STORAGE_KEY = "board"

export const boardService = {
  query,
  getById,
  save,
  remove,
  getEmptyBoard,
  addBoardMsg,
  updateBoard,
  filteredBoard,
  createNewGroup,
  createNewTask,
  getDefaultFilter,
}
window.cs = boardService

async function query() {
  let boards = utilService.loadFromStorage(STORAGE_KEY)
  if (!boards || !boards.length)
    utilService.saveToStorage(STORAGE_KEY, DEMO_BOARD_LIST)
  boards = await storageService.query(STORAGE_KEY)
  return boards
}

function getById(boardId) {
  return storageService.get(STORAGE_KEY, boardId)
}

async function remove(boardId) {
  return storageService.remove(STORAGE_KEY, boardId)
}

async function save(board) {
  var savedBoard
  if (board._id) {
    savedBoard = await storageService.put(STORAGE_KEY, board)
  } else {
    savedBoard = await storageService.post(STORAGE_KEY, board)
  }
  return savedBoard
}

async function addBoardMsg(boardId, txt) {
  const savedMsg = await storageService.post(STORAGE_KEY, {
    _id: boardId,
    txt,
  })
  return savedMsg
}

function updateBoard(board, groupId, taskId, { key, value }, activity) {
  let gIdx = board.groups?.findIndex((g) => g.id === groupId)
  let tIdx = board.groups[gIdx]?.tasks.findIndex((c) => c.id === taskId)

  if (taskId) {
    board.groups[gIdx].tasks[tIdx][key] = value
    console.log("update card")
  } else if (groupId) {
    board.groups[gIdx][key] = value
    console.log("update group")
  } else {
    board[key] = value
  }

  if (activity) {
    activityService.addActivity(activity)
  }

  save(board)
  return board
}

function getDefaultFilter() {
  return {
    txt: "",
    labels: [],
    members: [],
    noDates: false,
    overdue: false,
    dueNextDay: false,
    dueNextWeek: false,
    dueNextMonth: false,
    isCompleted: false,
  }
}

function filteredBoard(board, filterBy) {
  if (!board) return

  const groups = board.groups.map((group) => {
    const tasks = group.tasks.filter((task) => {
      return (
        _isTaskMatchLabels(task, filterBy) &&
        _isTaskMatchMembers(task, filterBy) &&
        _isTaskMatchTxt(task, filterBy) &&
        _isTaskMatchDates(task, filterBy)
      )
    })
    return { ...group, tasks }
  })

  return { ...board, groups }
}

function _isTaskMatchLabels(task, filter) {
  const { labels } = filter

  if (!labels || !labels.length) {
    // no labels-related filtering
    return true
  }

  if (!task.labelIds || !task.labelIds.length) {
    return labels.includes("none")
  }

  return task.labelIds.some((id) => labels.includes(id))
}

function _isTaskMatchMembers(task, filter) {
  const { members } = filter

  // TODO change members to memberIds
  if (!members || !members.length) {
    // no members-related filtering
    return true
  }

  if (!task.members || !task.members.length) {
    return members.includes("none")
  }
  const taskMemberIds = task.members.map((m) => m.id)
  return taskMemberIds.some((taskMemberId) => members.includes(taskMemberId))
}

function _isTaskMatchTxt(task, filter) {
  const { txt } = filter

  if (!txt) {
    // no txt-related filtering
    return true
  }

  return task.title.toLowerCase().includes(txt.toLowerCase())
}

function _isTaskMatchDates(task, filter) {
  const {
    noDates,
    overdue,
    dueNextDay,
    dueNextWeek,
    dueNextMonth,
    isCompleted,
  } = filter

  const due = new Date(task.dueDate?.date)

  if (
    !noDates &&
    !overdue &&
    !dueNextDay &&
    !dueNextWeek &&
    !dueNextMonth &&
    !isCompleted
  ) {
    // no date-related filtering
    return true
  }

  let isMatchNoDates = false
  let isMatchOverdue = false
  let isMatchDueNextDay = false
  let isMatchDueNextWeek = false
  let isMatchDueNextMonth = false
  let isMatchIsCompleted = false

  if (noDates) {
    isMatchNoDates = !task.dueDate
  }

  if (overdue) {
    isMatchOverdue = due < Date.now()
  }

  if (dueNextDay) {
    const nextDay = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
    isMatchDueNextDay = due < nextDay && due > Date.now()
  }

  if (dueNextWeek) {
    const nextWeek = new Date()
    nextWeek.setDate(nextWeek.getDate() + 7)
    isMatchDueNextWeek = due < nextWeek && due > Date.now()
  }

  if (dueNextMonth) {
    const nextMonth = new Date()
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    isMatchDueNextMonth = due < nextMonth && due > Date.now()
  }

  if (isCompleted) {
    isMatchIsCompleted = task.dueDate?.isCompleted
  }

  return (
    isMatchNoDates ||
    isMatchOverdue ||
    isMatchDueNextDay ||
    isMatchDueNextWeek ||
    isMatchDueNextMonth ||
    isMatchIsCompleted
  )
}

function createNewGroup() {
  return {
    id: `g${utilService.makeId()}`,
    archivedAt: null,
    title: "",
    tasks: [],
  }
}

function createNewTask() {
  return {
    id: `t${utilService.makeId()}`,
    title: "",
    description: "",
    comments: [],
    checklists: [],
    attachments: [],
    members: [],
    labelIds: [],
    dueDate: null,
    //TODO: get logged in user
    byMember: {},
    style: null,
  }
}

// TODO
function getEmptyBoard() {
  return {}
}
