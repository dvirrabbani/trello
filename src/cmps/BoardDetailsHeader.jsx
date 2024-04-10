import SvgIcon from "./SvgIcon"

export function BoardDetailsHeader({ title, members, setDisplayFilter }) {
  return (
    <section className="board-details-header">
      <div className="board-topbar-start">
        <h3 className="board-details-title">{title}</h3>
      </div>
      <div className="board-topbar-end">
        <button className="button" onClick={() => setDisplayFilter(true)}>
          <SvgIcon iconName="filter" />
          Filters
        </button>
        <div className="divider"></div>
        <ul className="member-list">
          {members.map((member) => {
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
