import { Button } from "./Button"

export function LabelButton({ color, title, onClick }) {
  return (
    <Button
      className="label-button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {title && <span>{title}</span>}
    </Button>
  )
}
