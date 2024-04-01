import { useEffect } from "react";
import { Outlet, useParams } from "react-router";
import { useSelector } from "react-redux";
import { GroupList } from "../cmps/GroupList";
import { loadBoard, loadBoards } from "../store/board.actions";

export function BoardDetails() {
  const params = useParams();
  const board = useSelector((storeState) => storeState.boardModule.board);

  useEffect(() => {
    loadBoard(params.boardId);
  }, [params.boardId]);

  if (!board) return <div>Loading..</div>;

  return (
    <div className="board-details-container">
      <div className="board-sidebar">Sidebar</div>
      <div className="board-main-content">
        <div className="board-header">{board.title}</div>
        <div className="board-groups-container">
          <GroupList groups={board.groups} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
