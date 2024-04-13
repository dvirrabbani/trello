import { ButtonDynamicTaskPopover } from "./ButtonDynamicTaskPopover"

export function TaskSideBtnActions({ btnPopoverDataList, task, onUpdateTask }) {
  return (
    <div className="task-side-btn-actions">
      {btnPopoverDataList.map((item) => {
        const { iconName, type, title, popoverTitle, popoverId } = item
        return (
          <ButtonDynamicTaskPopover
            key={popoverId}
            popoverTitle={popoverTitle}
            title={title}
            iconName={iconName}
            popoverId={popoverId}
            variant={"contained"}
            type={type}
            task={task}
            onUpdateTask={onUpdateTask}
          />
        )
      })}
    </div>
  )
}
