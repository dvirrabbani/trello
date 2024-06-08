import { useSelector } from "react-redux"
import { ActivitiesPopover } from "../../ActivitiesPopover"
import { ChangeBoardBg } from "./ChangeBoardBg"
import { ca } from "date-fns/locale"

export function DynamicBoardMenu({ type }) {
  const activities = useSelector(
    (storeState) => storeState.boardModule?.board?.activities
  )
  switch (type) {
    case "activity":
      return <ActivitiesPopover activities={activities} />
    case "background":
    case "bg-color":
    case "bg-photo":
      return <ChangeBoardBg type={type} />
  }
}
