import { DEMO_BOARD_LIST } from "../demo/boards";

export const SET_BOARDS = "SET_BOARDS";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const ADD_BOARD = "ADD_BOARD";
export const SET_BOARD = "SET_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const UNDO_REMOVE_BOARD = "UNDO_REMOVE_BOARD";

const initialState = {
  boards: DEMO_BOARD_LIST,
  board: null,
  lastRemovedBoard: null,
};

export function boardReducer(state = initialState, action) {
  var newState = state;
  var boards;
  switch (action.type) {
    case SET_BOARDS:
      newState = { ...state, boards: action.boards };
      break;
    case REMOVE_BOARD:
      const lastRemovedBoard = state.boards.find(
        (board) => board._id === action.boardId
      );
      boards = state.boards.filter((board) => board._id !== action.boardId);
      newState = { ...state, boards, lastRemovedBoard };
      break;
    case SET_BOARD:
      const board = state.boards.find((board) => board._id === action.boardId);
      newState = { ...state, board };
      break;
    case ADD_BOARD:
      newState = { ...state, boards: [...state.boards, action.board] };
      break;
    case UPDATE_BOARD:
      boards = state.boards.map((board) =>
        board._id === action.board._id ? action.board : board
      );
      newState = { ...state, boards };
      break;
  }
  return newState;
}