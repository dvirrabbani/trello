import { useState } from "react"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"
import { LabelButton } from "./LabelButton"

export function FilterPopover({ members, labels, onClose }) {
  console.log(members, labels)
  const [filter, setFilter] = useState({})
  const handleFilterChange = (name, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }))
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
          <section className="filter-section">
            <h3>Members</h3>
            <ul className="clean-list flex column">
              {members?.map((m) => {
                return (
                  <label>
                    <input type="checkbox" onChange={handleFilterChange} />
                    <div
                      className="button label-button variant-text shape-regular"
                      onClick={handleFilterChange}
                    >
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
                      <input type="checkbox" onChange={handleFilterChange} />
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
