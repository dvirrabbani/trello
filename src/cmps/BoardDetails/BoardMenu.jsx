import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function BoardMenu() {
  return (
    <div className="board-menu">
      <header className="board-menu-header">
        <div className="title">Menu</div>
        <Button className={"close-menu-btn"}>
          <SvgIcon iconName="close" />
        </Button>
      </header>
    </div>
  )
}
