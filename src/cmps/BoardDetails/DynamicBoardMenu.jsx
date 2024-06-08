export function DynamicBoardMenu({ type, setMenuContent }) {
  switch (type) {
    case "activity":
      return <div>Activity</div>
    case "background":
      return <div>Change background</div>
    case "labels":
      return <div>Labels</div>
    default:
      return <div>Menu</div>
  }
}
