import { useState } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import dayjs from "dayjs"
import { Button } from "../Button"

export function TaskDatesPopover({ task, onUpdateTask, onClose }) {
  const [dueDate, setDueDate] = useState(dayjs(task?.dueDate?.date || null))

  function onSaveTaskDate() {
    const dueDateToSave = {
      isComplete: task.dueDate.isComplete || false,
      date: new Date(dueDate.$d).getTime(),
    }

    onUpdateTask({
      key: "dueDate",
      value: dueDateToSave,
    })

    onClose()
  }

  return (
    <div className="task-dates-popover">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={dueDate} onChange={(value) => setDueDate(value)} />
      </LocalizationProvider>
      <Button variant="primary" onClick={onSaveTaskDate}>
        Save
      </Button>
    </div>
  )
}
