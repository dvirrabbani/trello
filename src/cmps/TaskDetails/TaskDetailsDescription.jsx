import SvgIcon from "../SvgIcon"
import { Button } from "../Button"
import { TaskDetailDescriptionForm } from "./TaskDetailDescriptionForm"
import { useState } from "react"
import { useForm } from "../../customHooks/useForm"

export function TaskDetailsDescription({
  description,
  onUpdateTaskDescription,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [fields, , handleChange] = useForm({
    description: description || "",
  })

  return (
    <section className="task-details-description">
      <div className="task-details-description flex justify-between">
        <h3 className="task-description-title flex align-center">
          <SvgIcon iconName="description" /> Description
        </h3>
        {/* Edit Button */}
        {!isFormOpen && (
          <Button variant="contained" onClick={() => setIsFormOpen(true)}>
            Edit
          </Button>
        )}
      </div>

      {/* Description is empty */}
      {!isFormOpen && !fields.description && (
        <Button onClick={() => setIsFormOpen(true)}>
          Add a more details description...{" "}
        </Button>
      )}
      {/* Description has value and from is not open */}
      {!isFormOpen && fields.description && <div>{fields.description}</div>}
      {/* User clicks on Edit Description */}
      {isFormOpen && (
        <TaskDetailDescriptionForm
          handleChange={handleChange}
          onUpdateTaskDescription={onUpdateTaskDescription}
          description={fields.description}
          setIsFormOpen={setIsFormOpen}
        />
      )}
    </section>
  )
}
