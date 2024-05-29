import { DEMO_USER } from "../demo/user.js"

export const SET_USER = "SET_USER"
export const SET_WATCHED_USER = "SET_WATCHED_USER"
export const SAVE_USER_RECENT_BOARD = "SAVE_USER_RECENT_BOARD"
export const REMOVE_USER = "REMOVE_USER"
export const SET_USERS = "SET_USERS"

const initialState = {
  user: DEMO_USER,
  //   user: userService.getLoggedinUser(),
  users: [],
  watchedUser: null,
  recentBoards: null,
}

export function userReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case SET_USER:
      newState = { ...state, user: action.user }
      break
    case SET_WATCHED_USER:
      newState = { ...state, watchedUser: action.user }
      break
    case REMOVE_USER:
      newState = {
        ...state,
        users: state.users.filter((user) => user._id !== action.userId),
      }
      break
    case SET_USERS:
      newState = { ...state, users: action.users }
      break
    case SAVE_USER_RECENT_BOARD:
      const recentBoards = state.user.recentBoards || []
      const currentDate = Date.now()

      const boardIdx = recentBoards.findIndex(
        (board) => board.id === action.boardId
      )

      if (boardIdx != -1) {
        recentBoards[boardIdx].date = currentDate
      } else {
        const recentBoardToAdd = { id: action.boardId, date: currentDate }
        recentBoards.push(recentBoardToAdd)
      }

      newState = { ...state, recentBoards }
      break
    default:
  }
  // For debug:
  // window.userState = newState
  // console.log('State:', newState)
  return newState
}
