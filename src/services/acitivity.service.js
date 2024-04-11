import { DEMO_USER } from "../demo/user"
import { updateCurrentBoard } from "../store/board.actions"
import { utilService } from "./util.service"
import { store } from "../store/store"

const activityTypes = {
  addGroup: "Add Group",
  addCard: "addCard",
}

export const activityService = {
  addActivity,
  activityTypes,
}

function addActivity(activity) {
  activity.id = utilService.makeId()
  activity.createdAt = new Date().getTime()
  activity.byMember = DEMO_USER
  switch (activity.type) {
    case activityTypes.addGroup:
      activity.txt = `${DEMO_USER.fullname} add new Group`
      break
    case activityTypes.addCard:
      activity.txt = `${DEMO_USER.fullname} add new card`
      break
    default:
      break
  }
  const currentBoard = store.getState().boardModule.board
  updateCurrentBoard(null, null, {
    key: "activities",
    value: [activity, ...currentBoard.activities],
  })
  return activity
}
