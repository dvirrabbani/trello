export const SET_BOARDS = "SET_BOARDS"
export const UPDATE_BOARDS = "UPDATE_BOARDS"
export const REMOVE_BOARD = "REMOVE_BOARD"
export const ADD_BOARD = "ADD_BOARD"
export const SET_BOARD = "SET_BOARD"
export const UPDATE_BOARD = "UPDATE_BOARD"
export const UPDATE_CURRENT_BOARD = "UPDATE_CURRENT_BOARD"
export const UNDO_REMOVE_BOARD = "UNDO_REMOVE_BOARD"
export const TOGGLE_LABELS = "TOGGLE_LABELS"
export const BOARD_ADD_ACTIVITY = "BOARD_ADD_ACTIVITY"
export const SET_BOARD_FILTER = "SET_BOARD_FILTER"

const initialState = {
  boards: [],
  board: null,
  lastRemovedBoard: null,
  labelsExpand: true,
  boardFilterBy: {
    txt: "",
    labels: [],
    members: [],
    noDates: false,
    overdue: false,
    dueNextDay: false,
    dueNextWeek: false,
    dueNextMonth: false,
  },
}

export function boardReducer(state = initialState, action) {
  var newState = state
  var boards
  switch (action.type) {
    case SET_BOARDS:
      newState = { ...state, boards: action.boards }
      break
    case UPDATE_BOARDS:
      boards = state.boards.map((board) =>
        board._id === action.board._id ? action.board : board
      )
      newState = { ...state, boards: boards }
      break
    case REMOVE_BOARD:
      const lastRemovedBoard = state.boards.find(
        (board) => board._id === action.boardId
      )
      boards = state.boards.filter((board) => board._id !== action.boardId)
      newState = { ...state, boards, lastRemovedBoard }
      break
    case SET_BOARD:
      newState = { ...state, board: action.board }
      break
    case ADD_BOARD:
      newState = { ...state, boards: [...state.boards, action.board] }
      break
    case UPDATE_BOARD:
      newState = {
        ...state,
        boards: state.boards?.map((board) =>
          board._id === action.board._id ? action.board : board
        ),
      }
      break
    case UPDATE_CURRENT_BOARD:
      newState = {
        ...state,
        boards: state.boards?.map((board) =>
          board._id === action.board._id ? action.board : board
        ),
        board: { ...action.board },
      }
      break
    case TOGGLE_LABELS:
      newState = { ...state, labelsExpand: !state.labelsExpand }
      break
    case SET_BOARD_FILTER:
      newState = { ...state, boardFilterBy: action.filterBy }
  }
  return newState
}
