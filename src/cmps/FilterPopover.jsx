import { useState } from "react"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"

export function FilterPopover({ members, labels, onClose }) {
  const filterBy = {
    labels: ["l101"],
    members: ["u101", "u102"],
  }
  const [filter, setFilter] = useState(filterBy)

  const handleFilterChange = (e) => {
    const { type, name, value, checked } = e.currentTarget
    setFilter((prevFilter) => {
      let updatedFilter = { ...prevFilter }
      if (type === "checkbox") {
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
        updatedFilter[name] = value
      }
      return updatedFilter
    })
  }

  console.log("filter", filter)

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
          <section className="filter-section">
            <h3>Members</h3>
            <ul className="clean-list flex column">
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
                      <span>{m.fullname}</span>
                    </div>
                  </label>
                )
              })}
            </ul>
          </section>
          <section className="filter-section">
            <h3>Labels</h3>
            <ul className="clean-list task-label-list">
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
                        style={{ backgroundColor: lb.color }}
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
