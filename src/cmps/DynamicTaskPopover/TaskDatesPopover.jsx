import { useState } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { Button } from "../Button"
import { formatDate, utilService } from "../../services/util.service"

export function TaskDatesPopover({ task, onUpdateTask }) {
  const [duetDate, setDuetDate] = useState(null)

  function onSaveTaskDate() {
    const TaskDueDate = new Date(duetDate)
    onUpdateTask(
      {
        key: "dueDate",
        value: TaskDueDate,
      },
      {
        txt: `Update this task due date to ${formatDate(TaskDueDate)} `,
        task,
      }
    )
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
