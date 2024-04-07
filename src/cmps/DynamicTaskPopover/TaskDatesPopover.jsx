import { useState } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { Button } from "../Button"
import { updateTaskDate } from "../../store/board.actions"

export function TaskDatesPopover({ task, onUpdateTask }) {
  const [duetDate, setDuetDate] = useState(null)

  function onSaveTaskDate() {
    updateTaskDate(duetDate, onUpdateTask)
  }

  return (
    <div className="task-dates-popover">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={(value) => setDuetDate(value)} />
      </LocalizationProvider>
      <Button variant="primary" onClick={onSaveTaskDate}>
        Save
      </Button>
    </div>
  )
}
