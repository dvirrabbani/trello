import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
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
    <DragDropContext>
      <Droppable
        droppableId="checklist-section"
        direction="vertical"
        type="checklist-section"
      >
        {(provided) => (
          <section
            className="task-details-checklist"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {checklists?.map((checklist, index) => {
              return (
                <Draggable
                  key={checklist.id}
                  draggableId={checklist.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="task-details-checklist"
                      key={checklist.id}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {/* Checklist header */}
                      <div className="task-details-checklist-header task-detail-header-section">
                        <SvgIcon size={"md"} iconName={"checkbox"} />
                        <h3>{checklist.title}</h3>
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
                  )}
                </Draggable>
              )
            })}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  )
}
