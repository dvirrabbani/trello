export function BoardDetailsHeader({ title, members }) {
  return (
    <section className="board-details-header">
      <h3 className="board-details-title fs18">{title}</h3>
      <ul className="member-list">
        {members.map((member) => {
          return (
            <li key={member._id} className="member-item">
              <img src={member.imgUrl} alt="member image" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
