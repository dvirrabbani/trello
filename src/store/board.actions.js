import { utilService } from "../services/util.service.js"
// import { boardService } from "../services/board.service.local.js"
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
  UPDATE_CURRENT_BOARD,
} from "./board.reducer.js"
import { activityService } from "../services/acitivity.service.js"
import {
  SOCKET_EMIT_ADD_MEMBER,
  socketService,
} from "../services/socket.service.js"

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

export function getActionUpdateCurrentBoard(board) {
  return {
    type: UPDATE_CURRENT_BOARD,
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
    const activity = activityService.createActivity({
      type: activityService.activityTypes.addBoard,
    })
    board.activities = [activity]
    const savedBoard = await boardService.save(board)
    await store.dispatch(getActionAddBoard(savedBoard))
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
  store.dispatch(getActionUpdateCurrentBoard(updateBoard))
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

export async function updateTaskMembers(
  member,
  taskMembers,
  taskTitle,
  onUpdateTask
) {
  try {
    let membersToEdit = []
    let activity = {}
    // dose not have members
    if (!taskMembers) {
      membersToEdit = [member]
      // have members
    } else {
      const taskMember = taskMembers.find((m) => m.id === member.id)
      if (taskMember) {
        membersToEdit = taskMembers.filter((m) => m.id !== member.id)
        activity = {
          type: activityService.activityTypes.removeMember,
          member,
          taskTitle,
        }
      } else {
        membersToEdit = [...taskMembers, member]
        activity = {
          type: activityService.activityTypes.assignMember,
          member,
          taskTitle,
        }
      }
    }

    onUpdateTask(
      {
        key: "members",
        value: membersToEdit,
      },
      activity
    )

    if (activity.type === activityService.activityTypes.assignMember) {
      socketService.emit(SOCKET_EMIT_ADD_MEMBER, activity)
    }
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
    const taskLabel = taskLabelsIds.find((lIdx) => lIdx === labelId)
    labelIdsToEdit = taskLabel
      ? taskLabelsIds.filter((lIdx) => lIdx !== labelId)
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
