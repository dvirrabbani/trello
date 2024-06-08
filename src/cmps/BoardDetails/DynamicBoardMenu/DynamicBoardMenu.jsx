import { useSelector } from "react-redux"
import { ActivitiesPopover } from "../../ActivitiesPopover"
import { ChangeBoardBg } from "./ChangeBoardBg"

export function DynamicBoardMenu({ type }) {
  const activities = useSelector(
    (storeState) => storeState.boardModule?.board?.activities
  )
  switch (type) {
    case "activity":
      return <ActivitiesPopover activities={activities} />
    case "background":
      return <ChangeBoardBg />
  }
}
