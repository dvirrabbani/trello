import SvgIcon from "../SvgIcon"
import { Button } from "../Button"

export function TaskDetailsDescription({
  task,
  fields,
  handleChange,
  onAddDescription,
}) {
  return (
    <section className="task-details-description">
      <h3 className="task-description-title flex">
        <SvgIcon iconName="description" /> Description
      </h3>
      {!task.description && <Button>Add a more details description... </Button>}
      <input
        name="description"
        onChange={handleChange}
        value={fields.description}
      />
      {task.description && <div>{task.description}</div>}

      <button onClick={() => onAddDescription(fields.description)}>Save</button>
    </section>
  )
}
