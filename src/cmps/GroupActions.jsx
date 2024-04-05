export function GroupActions({ groupId, onDeleteGroup, setGroupActions }) {
  return (
    <div className="group-actions">
      <div className="actions-header">
        <span>List Actions</span>
        <button onClick={() => setGroupActions(false)}>X</button>
      </div>
      <ul className="actions-list clean-list">
        <li>
          <button
            className="delete-group"
            onClick={() => onDeleteGroup(groupId)}
          >
            delete group
          </button>
        </li>
      </ul>
    </div>
  )
}
