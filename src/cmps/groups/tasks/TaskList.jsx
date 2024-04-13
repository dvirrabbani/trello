import { TaskPreview } from "./TaskPreview"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useState } from "react"
import { updateCurrentBoard } from "../../../store/board.actions"

export function TaskList({ group }) {
  const [tasks, setTasks] = useState(group.tasks)
  function handleDragEnd(result) {
    const { source, destination } = result
    if (!destination) return

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return

    const items = Array.from(tasks)
    const [reorderedItem] = items.splice(source.index, 1)
    items.splice(destination.index, 0, reorderedItem)
    setTasks(items)
    updateCurrentBoard(group.id, null, {
      key: "tasks",
      value: items,
    })
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={group.id}>
        {(provided) => (
          <ol
            className="clean-list flex column task-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => {
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
    </DragDropContext>
  )
}
