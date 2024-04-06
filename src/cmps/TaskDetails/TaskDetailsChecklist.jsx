import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { TaskDetailsChecklistTodos } from "./TaskDetailsChecklistTodos"

export function TaskDetailsChecklist({
  checklists,
  onRemoveChecklist,
  onAddCheckListTodo,
  onRemoveCheckListTodo,
  onUpdateCheckListTodo,
}) {
  return (
    <section className="task-details-checklist">
      {checklists?.map((checklist) => {
        return (
          <div className="task-details-checklist" key={checklist.id}>
            {/* Checklist header */}
            <div className="task-details-checklist-header flex align-center">
              <SvgIcon iconName={"checkbox"} />
              {checklist.title}
              <Button
                variant="contained"
                onClick={() => onRemoveChecklist(checklist.id)}
              >
                Delete
              </Button>
            </div>
            <TaskDetailsChecklistTodos
              checklistsId={checklist.id}
              todos={checklist.todos}
              onUpdateCheckListTodo={onUpdateCheckListTodo}
              onAddCheckListTodo={onAddCheckListTodo}
              onRemoveCheckListTodo={onRemoveCheckListTodo}
            />
          </div>
        )
      })}
    </section>
  )
}
