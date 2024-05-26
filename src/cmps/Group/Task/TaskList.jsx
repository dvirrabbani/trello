import { ta } from "date-fns/locale"
import { TaskPreview } from "./TaskPreview"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { updateCurrentBoard } from "../../../store/board.actions"

export function TaskList({ group }) {
  const notArchivedTasks = group.tasks.filter((task) => !task.archivedAt)

  return (
    <Droppable droppableId={group.id} type="group">
      {(provided, snapshot) => (
        <ol
          className={`clean-list flex column task-list`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {notArchivedTasks.map((task, index) => {
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
        </ol>
      )}
    </Droppable>
  )
}
