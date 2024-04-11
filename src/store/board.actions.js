import { utilService } from "../services/util.service.js"
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
  UPDATE_BOARDS,
  TOGGLE_LABELS,
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

export function getActionUpdateBoards(board) {
  return {
    type: UPDATE_BOARDS,
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
    store.dispatch(getActionAddBoard(board))
    return savedBoard
  } catch (err) {
    console.log("Cannot add board", err)
    throw err
  }
}

export function updateCurrentBoard(groupId, taskId, { key, value }, activity) {
  const board = store.getState().boardModule.board
  const updateBoard = boardService.updateBoard(
    board,
    groupId,
    taskId,
    { key, value },
    activity
  )
  store.dispatch(getActionUpdateBoard(updateBoard))
}

export function updateBoard(board, { key, value }, activity) {
  const updateBoard = boardService.updateBoard(
    board,
    null,
    null,
    { key, value },
    activity
  )

  store.dispatch(getActionUpdateBoard(updateBoard))
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

// Task Actions
export async function loadTask(boardId) {
  try {
    await boardService.remove(boardId)
    store.dispatch(getActionRemoveBoard(boardId))
  } catch (err) {
    console.log("Cannot remove board", err)
    throw err
  }
}
export async function updateTaskMemberIds(
  memberId,
  taskMembersIds,
  onUpdateTask
) {
  try {
    let membersIdsToEdit = []
    // dose not have members
    if (!taskMembersIds) {
      membersIdsToEdit = [memberId]
      // have members
    } else {
      const taskMember = taskMembersIds.find((mIdx) => mIdx === memberId)
      membersIdsToEdit = taskMember
        ? taskMembersIds.filter((mIdx) => mIdx !== memberId)
        : [...taskMembersIds, memberId]
    }

    onUpdateTask({
      key: "memberIds",
      value: membersIdsToEdit,
    })
  } catch (err) {
    console.log("Cannot update member", err)
    throw err
  }
}

export async function updateTaskLabels(labelId, taskLabelsIds, onUpdateTask) {
  let labelIdsToEdit = []
  // dose not have labels
  if (!taskLabelsIds) {
    labelIdsToEdit = [labelId]
    // have labels
  } else {
    const taskLabel = taskLabelsIds.find((mIdx) => mIdx === labelId)
    labelIdsToEdit = taskLabel
      ? taskLabelsIds.filter((mIdx) => mIdx !== labelId)
      : [...taskLabelsIds, labelId]
  }

  onUpdateTask({
    key: "labelIds",
    value: labelIdsToEdit,
  })
}

export async function addTaskCheckList(title, task, onUpdateTask) {
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

export async function updateTaskDate(date, onUpdateTask) {
  onUpdateTask({
    key: "dueDate",
    value: date,
  })
}

export function toggleLabels() {
  store.dispatch({ type: TOGGLE_LABELS })
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
