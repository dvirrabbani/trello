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
            popoverTitle: "Members",
            popoverId: "popover-members-id",
          },
          {
            iconName: "label",
            type: "Labels",
            title: "Labels",
            popoverTitle: "Labels",
            popoverId: "popover-labels-id",
          },
          {
            iconName: "checkbox",
            type: "CheckList",
            title: "CheckList",
            popoverTitle: "CheckList",
            popoverId: "popover-checklist-id",
          },
          {
            iconName: "clock",
            type: "Dates",
            title: "Dates",
            popoverTitle: "Dates",
            popoverId: "popover-dates-id",
          },
          {
            iconName: "cover",
            type: "Cover",
            title: "Cover",
            popoverTitle: "Cover",
            popoverId: "popover-cover-id",
          },
        ]}
        task={task}
        onUpdateTask={onUpdateTask}
      />
    </section>
  )
}
