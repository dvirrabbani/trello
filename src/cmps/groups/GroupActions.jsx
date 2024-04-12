import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function GroupActions({ groupId, onDeleteGroup, setGroupActions }) {
  return (
    <div className="group-actions dynamic-task-popover">
      <div className="popover-header flex align-center justify-between">
        <div className="popover-title">List actions</div>
        <div className="popover-close" onClick={() => setGroupActions(false)}>
          <Button>
            <SvgIcon iconName={"close"} />
          </Button>
        </div>
      </div>
      <div className="popover-content">
        <ul className="actions-list clean-list">
          <li>
            <button
              className="delete-group-btn"
              onClick={() => onDeleteGroup(groupId)}
            >
              delete this list
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
