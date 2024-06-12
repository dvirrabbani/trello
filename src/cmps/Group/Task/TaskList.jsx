import { ta } from "date-fns/locale"
import { TaskPreview } from "./TaskPreview"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { updateCurrentBoard } from "../../../store/board.actions"
import { AddItemForm } from "../../AddItemForm"
import { useEffect, useRef } from "react"

export function TaskList({
  group,
  onAddTask,
  displayAddItem,
  setDisplayAddItem,
}) {
  const AddItemRef = useRef(null)
  useEffect(() => {
    if (AddItemRef.current)
      AddItemRef.current.scrollIntoView({ behavior: "smooth" })
  }, [group.tasks])
  return (
    <Droppable droppableId={group.id} type="group">
      {(provided, snapshot) => (
        <ol
          className={`clean-list flex column task-list`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {group.tasks.map((task, index) => {
            return (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={snapshot.isDragging ? "dragging" : ""}
                  >
                    <TaskPreview groupId={group.id} task={task} />
                  </li>
                )}
              </Draggable>
            )
          })}
          {provided.placeholder}
          {displayAddItem && (
            <AddItemForm
              ref={AddItemRef}
              onAddItem={onAddTask}
              setDisplayAddItem={setDisplayAddItem}
              type="task"
            />
          )}
        </ol>
      )}
    </Droppable>
  )
}
