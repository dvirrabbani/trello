import { useState } from "react"
import { useSelector } from "react-redux"
import { Popover } from "./Popover"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"
import { ProfileImg } from "./ProfileImg"
import { userService } from "../services/user.service"
import { updateBoard } from "../store/board.actions"

export function ShareBoardButton() {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const [users, setUsers] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  async function onShareBoard(event) {
    const target = event.currentTarget
    // set users which not include in the current board members
    const users = await userService.getAppUsers()
    const idsToFilter = board.members.map((member) => member.id)
    const appUsers = users.filter((user) => !idsToFilter.includes(user._id))
    setUsers(appUsers)
    setAnchorEl(target)
  }

  function onShareMemberToBoard(member) {
    let boardMembersToSave = [...board.members]
    const memberToSave = { ...member }

    if (memberToSave._id) {
      memberToSave.id = memberToSave._id
      delete memberToSave._id
    }

    const mIdx = boardMembersToSave.findIndex((boardMember) => boardMember.id === memberToSave.id)
    if (mIdx < 0) {
      boardMembersToSave.push(memberToSave)
      // must have at least one member
    } else if (boardMembersToSave.length > 1) {
      boardMembersToSave.splice(mIdx, 1)
    }
    updateBoard(board, { key: "members", value: boardMembersToSave })
    setAnchorEl(null)
  }

  const isPopoverOpen = Boolean(anchorEl) && users.length > 0

  return (
    <div className="share-board-button">
      <Button className="share-button" onClick={onShareBoard}>
        <SvgIcon iconName="shareUser" />
        <span>Share</span>
      </Button>
      <Popover
        id={isPopoverOpen ? "app-members-id" : undefined}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        title={"Members"}
      >
        <div className="app-members">
          <h4 className="title h4">App members</h4>
          {users.length > 0 && (
            <ul className="clean-list flex column">
              {users.map((member) => {
                return (
                  <Button key={`shared-board-${member._id}`} onClick={() => onShareMemberToBoard(member)}>
                    <ProfileImg member={member} size={"lg"} />
                    <span>{member.fullName}</span>
                  </Button>
                )
              })}
            </ul>
          )}
          <h4 className="title h4">Board Members</h4>
          <ul className="clean-list flex column">
            {board.members.map((member) => {
              return (
                <Button key={`shared-board-${member.id}`} onClick={() => onShareMemberToBoard(member)}>
                  <ProfileImg member={member} size={"lg"} />
                  <span>{member.fullName}</span>
                </Button>
              )
            })}
          </ul>
        </div>
      </Popover>
    </div>
  )
}
