import { useState } from "react"
import { updateCurrentBoard } from "../../store/board.actions"
import { utilService } from "../../services/util.service"
import SvgIcon from "../SvgIcon"
import { AddItemForm } from "../AddItemForm"
import { GroupPreview } from "./GroupPreview"

export function GroupList({ groups }) {
  const [displayAddItem, setDisplayAddItem] = useState(false)

  function onAddGroup(inputVal) {
    const group = {
      archivedAt: null,
      id: `g${utilService.makeId()}`,
      style: {},
      tasks: [],
      title: inputVal,
    }
    const updateGroups = [...groups, group]
    updateCurrentBoard(null, null, {
      key: "groups",
      value: updateGroups,
    })
    setDisplayAddItem(false)
  }

  function deleteGroup(groupId) {
    const updateGroups = groups.filter((group) => group.id !== groupId)
    updateCurrentBoard(null, null, {
      key: "groups",
      value: updateGroups,
    })
  }

  return (
    <ol className="group-list clean-list flex">
      {groups.map((group) => (
        <GroupPreview key={group.id} group={group} deleteGroup={deleteGroup} />
      ))}
      {displayAddItem ? (
        <AddItemForm
          onAddItem={onAddGroup}
          setDisplayAddItem={setDisplayAddItem}
          className="group-preview"
        />
      ) : (
        <button
          className="add-group-btn"
          onClick={() => setDisplayAddItem(true)}
        >
          <SvgIcon iconName="plus" />
          <span>Add another group</span>
        </button>
      )}
    </ol>
  )
}
