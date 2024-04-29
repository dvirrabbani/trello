import { useRef, useState } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { DateField, TimeField } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { Button } from "../Button"

export function TaskDatesPopover({
  task,
  onUpdateTask,
  onClose,
  defaultDueDate = dayjs(new Date()),
}) {
  const [dueDate, setDueDate] = useState(
    dayjs(task?.dueDate?.date || defaultDueDate)
  )
  const [isDueDateChecked, setIsDueDateChecked] = useState(true)
  const prevDueDateRef = useRef(dayjs(task?.dueDate?.date || defaultDueDate))

  function onSaveTaskDate() {
    const dueDateToSave = {
      isCompleted: task?.dueDate?.isCompleted || false,
      date: new Date(dueDate.$d).getTime(),
    }

    onUpdateTask({
      key: "dueDate",
      value: dueDateToSave,
    })

    onClose()
  }

  function onChangeDueDate(value) {
    setDueDate(value)
    prevDueDateRef.current = value
  }

  function onChangeDueDateChecked() {
    setIsDueDateChecked((prev) => !prev)
    setDueDate(isDueDateChecked ? null : prevDueDateRef.current)
  }

  function onRemoveDueDate() {
    if (task?.dueDate) {
      onUpdateTask({
        key: "dueDate",
        value: null,
      })
    }
    onClose()
  }

  return (
    <div className="task-dates-popover">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={dueDate} onChange={onChangeDueDate} />
        <div className="task-due-date">
          <label>Due date</label>
          <section className="form-group flex">
            <input
              type="checkbox"
              checked={Boolean(isDueDateChecked)}
              onChange={onChangeDueDateChecked}
            />

            <DateField
              value={dueDate}
              onChange={onChangeDueDate}
              InputProps={{
                disabled: !isDueDateChecked,
              }}
            />
            <TimeField
              value={dueDate}
              onChange={onChangeDueDate}
              InputProps={{
                disabled: !isDueDateChecked,
              }}
            />
          </section>
        </div>
      </LocalizationProvider>
      <Button variant="primary" onClick={onSaveTaskDate}>
        Save
      </Button>
      <Button variant="group" onClick={onRemoveDueDate}>
        Remove
      </Button>
    </div>
  )
}
