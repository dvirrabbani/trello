import { updateCurrentBoard } from "../store/board.actions"
import { utilService } from "./util.service"
import { store } from "../store/store"
import { userService } from "./user.service"

const activityTypes = {
  addBoard: "Add Board",
  addGroup: "Add Group",
  addCard: "addCard",
}

export const activityService = {
  addActivity,
  activityTypes,
  createActivity,
}

function createActivity(activity) {
  activity.id = utilService.makeId()
  activity.createdAt = new Date().getTime()
  const loggedInUser = userService.getLoggedinUser()
  activity.byMember = loggedInUser
  switch (activity.type) {
    case activityTypes.addGroup:
      activity.txt = `${loggedInUser.fullName} add new group`
      break
    case activityTypes.addCard:
      activity.txt = `${loggedInUser.fullName} add new card`
      break
    case activityTypes.addBoard:
      activity.txt = `${loggedInUser.fullName} add new board`
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
