import { updateCurrentBoard } from "../store/board.actions"
import { utilService } from "./util.service"
import { store } from "../store/store"
import { userService } from "./user.service"
import { rem } from "polished"

const activityTypes = {
  addBoard: "Add Board",
  addGroup: "Add Group",
  addCard: "addCard",
  assignMember: "Assign Member",
  removeMember: "Remove Member",
}

export const activityService = {
  addActivity,
  activityTypes,
  createActivity,
}

function createActivity(activity) {
  activity.id = `ac${utilService.makeId()}`
  activity.createdAt = new Date().getTime()
  const loggedInUser = userService.getLoggedinUser()
  const createByMember = {
    id: loggedInUser._id,
    fullName: loggedInUser.fullName,
    imgUrl: loggedInUser.imgUrl,
  }
  activity.byMember = createByMember
  switch (activity.type) {
    case activityTypes.addGroup:
      activity.txt = `${createByMember.fullName} add new group`
      break
    case activityTypes.addCard:
      activity.txt = `${createByMember.fullName} add new card`
      break
    case activityTypes.addBoard:
      activity.txt = `${createByMember.fullName} add new board`
      break
    case activityTypes.assignMember:
      activity.txt = `${createByMember.fullName} assign ${activity.member.fullName} to card - ${activity.taskTitle}`
      break
    case activityTypes.removeMember:
      activity.txt = `${createByMember.fullName} remove ${activity.member.fullName} from card - ${activity.taskTitle}`
      break
    default:
      break
  }
  return activity
}
function addActivity(activity) {
  const activityToAdd = createActivity(activity)
  const currentBoard = store.getState().boardModule.board
  updateCurrentBoard(null, null, {
    key: "activities",
    value: [activityToAdd, ...currentBoard.activities],
  })
  return activity
}
