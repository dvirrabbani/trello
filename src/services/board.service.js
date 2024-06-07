import { activityService } from "./acitivity.service.js"
import { httpService } from "./http.service.js"
import { uiService } from "./ui.service.js"
import { utilService } from "./util.service.js"
import { darken, lighten, opacify } from "polished"

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
  setBoardDynamicStyle,
  resetDynamicStyle,
  getBoardChartsData,
  filterBtnPopoverDataList,
}
window.cs = boardService

async function query() {
  return httpService.get(STORAGE_KEY)
}

function getById(boardId) {
  return httpService.get(`${STORAGE_KEY}/${boardId}`)
}

async function remove(boardId) {
  return httpService.delete(`${STORAGE_KEY}/${boardId}`)
}

async function save(board) {
  var savedBoard
  if (board._id) {
    savedBoard = await httpService.put(`${STORAGE_KEY}/${board._id}`, board)
  } else {
    savedBoard = await httpService.post(STORAGE_KEY, board)
  }
  return savedBoard
}

async function addBoardMsg(boardId, txt) {
  const savedMsg = await httpService.post(`${STORAGE_KEY}/${boardId}/msg`, {
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
    console.log("update board")
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
        _isTaskMatchDates(task, filterBy) &&
        !task.archivedAt
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

function getBoardChartsData(board) {
  let cardsPerList = []
  let cardsPerDueDate = []
  let cardsPerLabel = []
  let cardsPerMember = []

  const mapMemberIdToCountTasks = {}
  const dueDateCounts = {}

  // Initialize a count object for each label Id
  const MapBoardLabelToTaskLabelCount = board.labels.reduce((acc, label) => {
    acc[label.id] = 0
    return acc
  }, {})

  board.groups.forEach((group) => {
    group.tasks.forEach((task) => {
      // due dates count
      let dueDateStatus
      if (task.dueDate) {
        dueDateStatus =
          uiService.getDueDateStatusAndClassName(
            task.dueDate.date,
            task.dueDate.isCompleted
          ).status || "Due Later"
      }

      if (!dueDateStatus) {
        dueDateStatus = "No due date"
      }

      dueDateCounts[dueDateStatus] = dueDateCounts[dueDateStatus]
        ? dueDateCounts[dueDateStatus] + 1
        : 1

      // Members tasks count
      if (task.members.length === 0) {
        mapMemberIdToCountTasks.unassigned = mapMemberIdToCountTasks.unassigned
          ? mapMemberIdToCountTasks.unassigned + 1
          : 1
      }

      task.members.map((member) => {
        mapMemberIdToCountTasks[member.id] = mapMemberIdToCountTasks[member.id]
          ? mapMemberIdToCountTasks[member.id] + 1
          : 1
      })
      // Board Label count
      task.labelIds.forEach((labelId) => {
        if (MapBoardLabelToTaskLabelCount.hasOwnProperty(labelId)) {
          MapBoardLabelToTaskLabelCount[labelId]++
        }
      })
    })
  })

  // Cards Per list
  cardsPerList = board.groups.map((group) => ({
    title: group.title,
    count: group.tasks.length,
  }))

  // Cards per due date
  cardsPerDueDate = Object.keys(dueDateCounts).map((dueDate) => ({
    title: dueDate,
    count: dueDateCounts[dueDate],
  }))

  // Cards per member
  cardsPerMember = board.members.map((member) => {
    return {
      title: member.fullName,
      count: mapMemberIdToCountTasks[member.id]
        ? mapMemberIdToCountTasks[member.id]
        : 0,
    }
  })

  // Add tasks count to task that not unassigned to a user
  if (mapMemberIdToCountTasks.unassigned) {
    cardsPerMember.push({
      title: "Unassigned",
      count: mapMemberIdToCountTasks.unassigned,
    })
  }

  // // Cards Per Label
  Object.entries(MapBoardLabelToTaskLabelCount).forEach(([labelId, count]) => {
    if (count > 0) {
      const boardLabel = board.labels.find((label) => label.id === labelId)
      return cardsPerLabel.push({
        id: boardLabel.id,
        title: boardLabel.title || boardLabel.name,
        count,
        color: boardLabel.bgColor,
      })
    }
  })

  return {
    cardsPerList,
    cardsPerDueDate,
    cardsPerLabel,
    cardsPerMember,
  }
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

function setBoardDynamicStyle(boardStyle) {
  const { colorRgb, themeColor } = boardStyle

  const root = document.documentElement
  root.style.setProperty(
    "--dynamic-background-transparent",
    _darkenOrLightenColor(themeColor, `rgba(${colorRgb}, 0.8)`)
  )
  root.style.setProperty(
    "--dynamic-background",
    _darkenOrLightenColor(themeColor, `rgb(${colorRgb})`)
  )
}

function _darkenOrLightenColor(themeColor, color) {
  //if theme is dark, lighten the color, else darken it
  if (themeColor === "dark") {
    return lighten(0.01, color)
  } else {
    return darken(0.01, color)
  }
}

function resetDynamicStyle() {
  const root = document.documentElement
  root.style.setProperty("--dynamic-background-transparent", "")
  root.style.setProperty("--dynamic-background", "")
}

function filterBtnPopoverDataList(task, btnPopoverDataList) {
  const filterBtnPopoverDataList = btnPopoverDataList.filter((btn) => {
    //check if task has labels
    if (btn.type === "Labels" && task.labelIds?.length > 0) return true
    //check if task has members
    if (btn.type === "Members" && task.members?.length > 0) return true
    //check if task has cover
    if (btn.type === "Cover" && task.style?.bgColor) return true
    //check if task has dates
    if (btn.type === "Dates" && task.dueDate) return true
    return false
  })
  return filterBtnPopoverDataList
}

// TODO
function getEmptyBoard() {
  return {}
}
