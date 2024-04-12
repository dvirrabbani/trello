import { useEffect, useState } from "react"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"
import { store } from "../store/store"

export function FilterPopover({ members, labels, onClose, filterBy }) {
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
    <div className="dynamic-task-popover">
      <div className="popover-header flex align-center justify-between">
        <div className="popover-title">Filter</div>
        <div className="popover-close">
          <Button onClick={onClose}>
            <SvgIcon iconName={"close"} />
          </Button>
        </div>
      </div>
      <div className="popover-content">
        <form className="filter-form">
          <section>
            <h3>Keyword</h3>
            <input
              type="text"
              name="txt"
              value={filter.txt}
              onChange={handleFilterChange}
              placeholder="Enter a keyword..."
            />
          </section>
          <section className="filter-section">
            <h3>Members</h3>
            <ul className="clean-list flex column">
              <li className="">
                <label>
                  <input
                    type="checkbox"
                    name="members"
                    value="none"
                    checked={filter.members?.includes("none")}
                    onChange={handleFilterChange}
                  />
                  <div className="button label-button variant-text shape-regular">
                    <span>no members</span>
                  </div>
                </label>
              </li>
              {members?.map((m) => {
                return (
                  <label key={m._id}>
                    <input
                      type="checkbox"
                      name="members"
                      value={m._id}
                      checked={filter.members?.includes(m._id)}
                      onChange={handleFilterChange}
                    />
                    <div className="button label-button variant-text shape-regular">
                      <img
                        style={{ width: "30px" }}
                        key={m._id}
                        src={m.imgUrl}
                        alt=""
                      />
                      <span>{m.fullName}</span>
                    </div>
                  </label>
                )
              })}
            </ul>
          </section>
          <section className="filter-section">
            <h3>Due date</h3>
            <ul className="clean-list task-label-list">
              <li className="">
                <label>
                  <input
                    type="checkbox"
                    name="noDates"
                    value="none"
                    checked={filter.noDates}
                    onChange={handleFilterChange}
                  />
                  <div className="button label-button variant-text shape-regular">
                    <span>no dates</span>
                  </div>
                </label>
              </li>
              <li className="">
                <label>
                  <input
                    type="checkbox"
                    name="overdue"
                    value="none"
                    checked={filter.overdue}
                    onChange={handleFilterChange}
                  />
                  <div className="button label-button variant-text shape-regular">
                    <span>overdue</span>
                  </div>
                </label>
              </li>
              <li className="">
                <label>
                  <input
                    type="checkbox"
                    name="dueNextDay"
                    value="none"
                    checked={filter.dueNextDay}
                    onChange={handleFilterChange}
                  />
                  <div className="button label-button variant-text shape-regular">
                    <span>due next day</span>
                  </div>
                </label>
              </li>
              <li className="">
                <label>
                  <input
                    type="checkbox"
                    name="dueNextWeek"
                    value="none"
                    checked={filter.dueNextWeek}
                    onChange={handleFilterChange}
                  />
                  <div className="button label-button variant-text shape-regular">
                    <span>do nex week</span>
                  </div>
                </label>
              </li>
              <li className="">
                <label>
                  <input
                    type="checkbox"
                    name="dueNextMonth"
                    value="none"
                    checked={filter.dueNextMonth}
                    onChange={handleFilterChange}
                  />
                  <div className="button label-button variant-text shape-regular">
                    <span>due next month</span>
                  </div>
                </label>
              </li>
            </ul>
          </section>
          <section className="filter-section">
            <h3>Labels</h3>
            <ul className="clean-list task-label-list">
              <li className="">
                <label>
                  <input
                    type="checkbox"
                    name="labels"
                    value="none"
                    checked={filter.labels?.includes("none")}
                    onChange={handleFilterChange}
                  />
                  <div className="button label-button variant-text shape-regular">
                    <span>no labels</span>
                  </div>
                </label>
              </li>
              {labels?.map((lb) => {
                return (
                  <li key={lb.id} className="">
                    <label>
                      <input
                        type="checkbox"
                        name="labels"
                        value={lb.id}
                        checked={filter.labels?.includes(lb.id)}
                        onChange={handleFilterChange}
                      />
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
    </div>
  )
}
