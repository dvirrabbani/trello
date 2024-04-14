import { DEMO_USER } from "../demo/user"
import { updateCurrentBoard } from "../store/board.actions"
import { utilService } from "./util.service"
import { store } from "../store/store"

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
  activity.byMember = DEMO_USER
  switch (activity.type) {
    case activityTypes.addGroup:
      activity.txt = `${DEMO_USER.fullName} add new group`
      break
    case activityTypes.addCard:
      activity.txt = `${DEMO_USER.fullName} add new card`
      break
    case activityTypes.addBoard:
      activity.txt = `${DEMO_USER.fullName} add new board`
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
