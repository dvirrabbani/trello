// import { storageService } from "./http.service.js";
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
}
window.cs = boardService

async function query(filterBy = { txt: "" }) {
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

// TODO
function getEmptyBoard() {
  return {}
}

function filteredBoard(board, filterBy) {
  //filter board tasks by filterBy
}
