// import { storageService } from "./http.service.js";
import { DEMO_BOARD_LIST } from "../demo/boards.js";
import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

const STORAGE_KEY = "board";

export const boardService = {
  query,
  getById,
  save,
  remove,
  getEmptyBoard,
  addBoardMsg,
};
window.cs = boardService;

async function query(filterBy = { txt: "" }) {
  // return storageService.get(STORAGE_KEY, filterBy);
  return DEMO_BOARD_LIST;
}

function getById(boardId) {
  return storageService.get(`board/${boardId}`);
}

async function remove(boardId) {
  return storageService.delete(`board/${boardId}`);
}
async function save(board) {
  var savedBoard;
  if (board._id) {
    savedBoard = await storageService.put(`board/${board._id}`, board);
  } else {
    savedBoard = await storageService.post("board", board);
  }
  return savedBoard;
}

async function addBoardMsg(boardId, txt) {
  const savedMsg = await storageService.post(`board/${boardId}/msg`, { txt });
  return savedMsg;
}

// TODO
function getEmptyBoard() {
  return {};
}
