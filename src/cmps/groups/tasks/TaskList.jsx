import { TaskPreview } from "./TaskPreview"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { useState } from "react"
import { updateCurrentBoard } from "../../../store/board.actions"

export function TaskList({ group }) {
  return (
    <Droppable droppableId={group.id}>
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
        </ol>
      )}
    </Droppable>
  )
}
