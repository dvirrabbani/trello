export function FilterCount({ tasksCount }) {
  return (
    <div className="filter-count">
      <span className="countIcon"></span>
      <span>{tasksCount}</span>
    </div>
  )
}
