import { boardService } from "../services/board.service.js"
import { store } from "./store.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import {
  ADD_BOARD,
  REMOVE_BOARD,
  SET_BOARD,
  SET_BOARDS,
  UNDO_REMOVE_BOARD,
  UPDATE_BOARD,
} from "./board.reducer.js"

// Action Creators:
export function getActionRemoveBoard(boardId) {
  return {
    type: REMOVE_BOARD,
    boardId,
  }
}

export function getActionAddBoard(board) {
  return {
    type: ADD_BOARD,
    board,
  }
}

export function getActionUpdateBoard(board) {
  return {
    type: UPDATE_BOARD,
    board,
  }
}

export function getActionSetBoard(board) {
  return {
    type: SET_BOARD,
    board,
  }
}

export function getActionSetBoards(boards) {
  return {
    type: SET_BOARDS,
    boards,
  }
}

export function getActionUndoRemoveBoard() {
  return {
    type: UNDO_REMOVE_BOARD,
  }
}

// Actions
export async function addBoard(board) {
  try {
    const savedBoard = await boardService.save(board)
    console.log("Added Board", savedBoard)
    store.dispatch(getActionAddBoard(savedBoard))
    return savedBoard
  } catch (err) {
    console.log("Cannot add board", err)
    throw err
  }
}

export async function updateBoard(
  board,
  groupId,
  taskId,
  { key, value },
  activityType
) {
  console.log({ key, value })
  try {
    let gIdx, cIdx

    if (groupId) {
      gIdx = board.groups?.findIndex((g) => g.id === groupId)
    }

    if (gIdx && taskId) {
      cIdx = board.groups[gIdx]?.cards.findIndex((c) => c.id === taskId)
    }

    if (cIdx) {
      board.groups[gIdx].cards[cIdx][key] = value
      console.log("update card")
    } else if (gIdx) {
      board.groups[gIdx][key] = value
      console.log("update group")
    } else {
      board[key] = value
      console.log("update board")
    }

    const savedBoard = await boardService.save(board)
    store.dispatch(getActionUpdateBoard(savedBoard))
    return savedBoard
  } catch (error) {
    console.log("Cannot save board", err)
    throw err
  }
}

export async function loadBoards() {
  try {
    const boards = await boardService.query()
    console.log("Boards from DB:", boards)
    store.dispatch(getActionSetBoards(boards))
  } catch (err) {
    console.log("Cannot load boards", err)
    throw err
  }
}

export async function loadBoard(boardId) {
  try {
    store.dispatch(getActionSetBoard(null))
    const board = await boardService.getById(boardId)
    store.dispatch(getActionSetBoard(board))
  } catch (err) {
    console.log("Cannot load board", err)
  }
}

export async function removeBoard(boardId) {
  try {
    await boardService.remove(boardId)
    store.dispatch(getActionRemoveBoard(boardId))
  } catch (err) {
    console.log("Cannot remove board", err)
    throw err
  }
}

export async function loadTask(boardId) {
  try {
    await boardService.remove(boardId)
    store.dispatch(getActionRemoveBoard(boardId))
  } catch (err) {
    console.log("Cannot remove board", err)
    throw err
  }
}

// Demo for Optimistic Mutation
// (IOW - Assuming the server call will work, so updating the UI first)
export async function onRemoveBoardOptimistic(boardId) {
  try {
    store.dispatch(getActionRemoveBoard(boardId))
    showSuccessMsg("Board removed")
    await boardService.remove(boardId)
  } catch (error) {
    showErrorMsg("Cannot remove board")
    console.log("Cannot load boards", err)
    store.dispatch(getActionUndoRemoveBoard())
  }
}
