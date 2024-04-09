import { TaskSideBtnActions } from "../TaskSideBtnActions"

export function TaskDetailsSidebar({ task, onUpdateTask }) {
  return (
    <section className="task-details-sidebar">
      <h4 className="h4">Add to card</h4>
      <TaskSideBtnActions
        btnPopoverDataList={[
          {
            iconName: "profile",
            type: "Members",
            title: "Members",
          },
          {
            iconName: "label",
            type: "Labels",
            title: "Labels",
          },
          {
            iconName: "checkbox",
            type: "CheckList",
            title: "CheckList",
          },
          {
            iconName: "clock",
            type: "Dates",
            title: "Dates",
          },
        ]}
        task={task}
        onUpdateTask={onUpdateTask}
      />
    </section>
  )
}
