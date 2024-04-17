import { updateCurrentBoard } from "../store/board.actions"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"

export function BoardDetailsHeader({ board, setDisplayFilter }) {
  function onToggleBoardStarred() {
    updateCurrentBoard(null, null, {
      key: "isStarred",
      value: !board.isStarred,
    })
  }

  return (
    <section className="board-details-header">
      <div className="board-topbar-start">
        <h1 className="board-details-title">{board.title}</h1>
        <Button>
          <SvgIcon
            onClick={onToggleBoardStarred}
            iconName={board.isStarred ? "starFill" : "star"}
          />
        </Button>
      </div>
      <div className="board-topbar-end">
        <button className="button" onClick={() => setDisplayFilter(true)}>
          <SvgIcon iconName="filter" />
          Filters
        </button>
        <div className="divider"></div>
        <ul className="member-list">
          {board.members.map((member) => {
            return (
              <li key={member._id} className="member-item">
                <img src={member.imgUrl} alt="member image" />
              </li>
            )
          })}
        </ul>{" "}
      </div>
    </section>
  )
}
