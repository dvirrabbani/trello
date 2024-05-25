import { useEffect, useState } from "react"
import { store } from "../../store/store"
import SvgIcon from "../SvgIcon"

export function BoardFilter({ members, labels, filterBy }) {
  const [filter, setFilter] = useState(filterBy)

  useEffect(() => {
    store.dispatch({ type: "SET_BOARD_FILTER", filterBy: filter })
  }, [filter])

  const handleFilterChange = (e) => {
    const { type, name, value, checked } = e.currentTarget
    setFilter((prevFilter) => {
      let updatedFilter = { ...prevFilter }
      if (type === "checkbox") {
        if (name === "members" || name === "labels") {
          if (checked) {
            // Add the value if checkbox is checked
            updatedFilter[name] = [...(updatedFilter[name] || []), value]
          } else {
            // Remove the value if checkbox is unchecked
            updatedFilter[name] = (updatedFilter[name] || []).filter(
              (v) => v !== value
            )
          }
        } else {
          updatedFilter[name] = checked
        }
      } else {
        updatedFilter[name] = value
      }
      return updatedFilter
    })
  }

  return (
    <div className="board-filter">
      <form className="filter-form">
        <section>
          <h3 className="section-title">Keyword</h3>
          <input
            className="input-text"
            type="text"
            name="txt"
            value={filter.txt}
            onChange={handleFilterChange}
            placeholder="Enter a keyword..."
          />
          <p className="sub-txt">Search cards, members, labels, and more.</p>
        </section>
        <section className="filter-section">
          <h3 className="section-title">Members</h3>
          <ul className="clean-list flex column">
            <li className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="members"
                  value="none"
                  checked={filter.members?.includes("none")}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                <div className="filter-txt">
                  <span className="filter-icon">
                    <SvgIcon iconName="member" />
                  </span>
                  <span>no members</span>
                </div>
              </label>
            </li>
            {members?.map((m) => {
              return (
                <li key={m.id} className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="members"
                      value={m.id}
                      checked={filter.members?.includes(m.id)}
                      onChange={handleFilterChange}
                    />
                    <span className="checkmark"></span>
                    <div className="filter-txt">
                      <span className="filter-icon">
                        <img
                          className="profile-img"
                          key={m.id}
                          src={m.imgUrl}
                          alt=""
                        />
                      </span>
                      <span>{m.fullName}</span>
                    </div>
                  </label>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="filter-section">
          <h3 className="section-title">Due date</h3>
          <ul className="clean-list task-label-list">
            <li className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="noDates"
                  value="none"
                  checked={filter.noDates}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                <div className="filter-txt">
                  <span className="filter-icon">
                    <SvgIcon iconName="calendar" />
                  </span>
                  <span>no dates</span>
                </div>
              </label>
            </li>
            <li className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="overdue"
                  value="none"
                  checked={filter.overdue}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                <div className="filter-txt">
                  <span className="filter-icon overdue">
                    <SvgIcon iconName="clock" />
                  </span>
                  <span>overdue</span>
                </div>
              </label>
            </li>
            <li className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="dueNextDay"
                  value="none"
                  checked={filter.dueNextDay}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                <div className="filter-txt">
                  <span className="filter-icon due-soon">
                    <SvgIcon iconName="clock" />
                  </span>
                  <span>due next day</span>
                </div>
              </label>
            </li>
            <li className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="dueNextWeek"
                  value="none"
                  checked={filter.dueNextWeek}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                <div className="filter-txt">
                  <span className="filter-icon">
                    <SvgIcon iconName="clock" />
                  </span>
                  <span>do next week</span>
                </div>
              </label>
            </li>
            <li className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="dueNextMonth"
                  value="none"
                  checked={filter.dueNextMonth}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                <div className="filter-txt">
                  <span className="filter-icon">
                    <SvgIcon iconName="clock" />
                  </span>
                  <span>due next month</span>
                </div>
              </label>
            </li>
            <li className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="isCompleted"
                  value="none"
                  checked={filter.isCompleted}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                <div className="filter-txt">
                  <span>Marked as completed</span>
                </div>
              </label>
            </li>
          </ul>
        </section>
        <section className="filter-section">
          <h3 className="section-title">Labels</h3>
          <ul className="clean-list task-label-list">
            <li className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="labels"
                  value="none"
                  checked={filter.labels?.includes("none")}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                <div className="filter-txt">
                  <span className="filter-icon">
                    <SvgIcon iconName="label" />
                  </span>
                  <span>no labels</span>
                </div>
              </label>
            </li>
            {labels?.map((lb) => {
              return (
                <li key={lb.id} className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="labels"
                      value={lb.id}
                      checked={filter.labels?.includes(lb.id)}
                      onChange={handleFilterChange}
                    />
                    <span className="checkmark"></span>
                    <div
                      className="button label-button variant-text shape-regular"
                      style={{ backgroundColor: lb.bgColor }}
                    >
                      {lb.title && <span>{lb.title}</span>}
                    </div>
                  </label>
                </li>
              )
            })}
          </ul>
        </section>
      </form>
    </div>
  )
}
