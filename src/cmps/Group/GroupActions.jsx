export function GroupActions({ groupId, onDeleteGroup }) {
  return (
    <ul className="group-actions-list clean-list">
      <li>
        <button
          className="delete-group-btn"
          onClick={() => onDeleteGroup(groupId)}
        >
          delete this list
        </button>
      </li>
    </ul>
  )
}
