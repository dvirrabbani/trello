import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function TaskDetailsSidebar() {
  return (
    <section className="task-details-sidebar">
      <h4>Add to card</h4>
      <Button variant="contained">
        <SvgIcon iconName="profile" />
        <span>Members</span>
      </Button>
    </section>
  )
}
