import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { TaskDetailsChecklistTodos } from "./TaskDetailsChecklistTodos"
import { updateCurrentBoard } from "../../store/board.actions"

export function TaskDetailsChecklist({
  checklists,
  onRemoveChecklist,
  onAddCheckListTodo,
  onRemoveCheckListTodo,
  onUpdateCheckListTodo,
  onUpdateTask,
}) {
  function onDragEnd(result) {
    const { destination, source, draggableId, type } = result

    // dropped outside the list
    if (!destination) return
    // dropped in the same place
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    if (type === "checklist-section") {
      const newChecklists = handleDragInsideDroppable(checklists, source, destination)
      onUpdateTask({
        key: "checklists",
        value: newChecklists,
      })
      return
    }

    const startChecklist = checklists.find((checklist) => checklist.id === source.droppableId)
    const startTodoIds = Array.from(startChecklist.todos)
    const endChecklist = checklists.find((checklist) => checklist.id === destination.droppableId)
    const endTodoIds = Array.from(endChecklist.todos)

    const todoToMove = {
      ...startChecklist.todos.find((todo) => todo.id === draggableId),
    }

    if (startChecklist === endChecklist) {
      const newTodoIds = handleDragInsideDroppable(startChecklist.todos, source, destination)
      const updatedChecklists = checklists.map((checklist) => {
        if (checklist.id === startChecklist.id) {
          return { ...checklist, todos: newTodoIds }
        }
        return checklist
      })
      onUpdateTask({
        key: "checklists",
        value: updatedChecklists,
      })
      return
    }

    //moving from one list to another
    startTodoIds.splice(source.index, 1)
    const updateStartChecklist = { ...startChecklist, todos: startTodoIds }

    endTodoIds.splice(destination.index, 0, todoToMove)
    const updateEndChecklist = { ...endChecklist, todos: endTodoIds }

    const updateChecklists = checklists.map((checklist) => {
      if (checklist.id === startChecklist.id) return updateStartChecklist
      if (checklist.id === endChecklist.id) return updateEndChecklist
      return checklist
    })

    onUpdateTask({
      key: "checklists",
      value: updateChecklists,
    })
  }

  function handleDragInsideDroppable(items, source, destination) {
    const newItems = Array.from(items)
    const [reorderedItems] = newItems.splice(source.index, 1)
    newItems.splice(destination.index, 0, reorderedItems)
    return newItems
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="checklist-section" direction="vertical" type="checklist-section">
        {(provided) => (
          <section className="task-details-checklist-container" {...provided.droppableProps} ref={provided.innerRef}>
            {checklists?.map((checklist, index) => {
              return (
                <Draggable key={checklist.id} draggableId={checklist.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={`task-details-checklist ${snapshot.isDragging ? "dragging" : ""}`}
                      key={checklist.id}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      {/* Checklist header */}
                      <div {...provided.dragHandleProps} className="task-details-checklist-header task-detail-header-section">
                        <SvgIcon size={"md"} iconName={"checkbox"} />
                        <h3>{checklist.title}</h3>
                        <Button variant="contained" onClick={() => onRemoveChecklist(checklist.id)}>
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
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  )
}
