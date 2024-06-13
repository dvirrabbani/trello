import { darken } from "polished"
import { Button } from "./Button"

export function LabelButton({ color, title, onClick }) {
  const style = {
    backgroundColor: color,
    color: darken(0.35, color),
  }
  return (
    <Button className="label-button" onClick={onClick} style={style}>
      {title && <span>{title}</span>}
    </Button>
  )
}
