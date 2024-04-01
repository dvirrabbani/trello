import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadBoards } from "../store/board.actions.js";
import { BoardList } from "../cmps/BoardList.jsx";

export function Workspace() {
  const boards = useSelector((storeState) => storeState.boardModule.boards);

  useEffect(() => {
    loadBoards();
  }, []);

  return (
    <div className="workspace-container">
      <div className="board-list-header">Boards</div>
      <BoardList boards={boards} />
    </div>
  );
}
