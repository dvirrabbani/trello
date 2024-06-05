import React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"
// import { boardService } from "../../../services/board.service.local"
import { boardService } from "../../../services/board.service"
import { Button } from "../../Button"
import SvgIcon from "../../SvgIcon"
import { getEmptyBoardCard } from "../../../services/ui.service"

export default function BoarDashboardView({ board }) {
  const { cardsPerList, cardsPerDueDate, cardsPerMember, cardsPerLabel } =
    boardService.getBoardChartsData(board)

  const dueDatesLegend = [
    { title: "Complete", color: "var(--icon-accent-green, #22A06B)" },
    { title: "Due soon", color: "var(--icon-accent-yellow, #B38600)" },
    { title: "Due later", color: "var(--icon-accent-orange, #E56910)" },
    { title: "Overdue", color: "var(--icon-accent-red, #C9372C)" },
    {
      title: "No due date",
      color: "var(--background-accent-gray-subtler, #DCDFE4)",
    },
  ]

  const DueDateTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="due-date-tooltip">
          {payload.map((entry, index) => (
            <div key={`item-${index}`} className="flex column">
              <div className="title">{entry.payload.title}</div>
              <span>{entry.payload.count} cards</span>
            </div>
          ))}
        </div>
      )
    }

    return null
  }
  return (
    <div className="boar-dashboard-view">
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <div className="board-dashboard">
            {/* Dashboard card - Cards per List */}
            {cardsPerList.length > 0 ? (
              <section className="dashboard-card">
                <DashBoardCardHeader title="Cards per list" />
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  maxHeight={"404px"}
                >
                  <BarChart
                    data={cardsPerList}
                    margin={{
                      top: 0,
                      right: -32,
                      left: -32,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="title" tickLine={false} />
                    <YAxis allowDecimals={false} stroke="" tickMargin={8} />
                    <Tooltip />
                    <Bar
                      dataKey="count"
                      fill="var(--ds-background-neutral-bold, #44546F)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </section>
            ) : (
              <DashBoardCardEmpty type={"list"} />
            )}
            {/* Dashboard Pie card - Cards per due date */}
            {cardsPerDueDate.length > 0 ? (
              <section className="dashboard-card">
                <DashBoardCardHeader title="Cards per due date" />
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ right: 124 }}>
                    <Pie
                      data={cardsPerDueDate}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      stroke=""
                      // outerRadius={120}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {cardsPerDueDate.map((entry) => (
                        <Cell
                          key={`cell-${entry.dueDate}`}
                          fill={
                            dueDatesLegend.find(
                              (dueDate) =>
                                dueDate.title.toLocaleLowerCase() ===
                                entry.title.toLocaleLowerCase()
                            ).color
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<DueDateTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="recharts-legend-wrapper">
                  <ul className="clean-list flex column justify-center">
                    {dueDatesLegend.map((dueDateLegend) => {
                      return (
                        <li
                          key={dueDateLegend.title}
                          className="flex align-center"
                        >
                          <span
                            className="legend-color"
                            style={{ backgroundColor: dueDateLegend.color }}
                          ></span>
                          <span>{dueDateLegend.title}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </section>
            ) : (
              <DashBoardCardEmpty type={"dueDate"} />
            )}
            {/* Dashboard Bar card - Cards per Member */}
            <section className="dashboard-card">
              <DashBoardCardHeader title="Cards per member" />
              <ResponsiveContainer
                width="100%"
                height="100%"
                maxHeight={"404px"}
              >
                <BarChart
                  data={cardsPerMember}
                  margin={{
                    top: 0,
                    right: -32,
                    left: -32,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="title" tickLine={false} />
                  <YAxis allowDecimals={false} stroke="" tickMargin={8} />
                  <Tooltip />
                  <Bar
                    dataKey="count"
                    fill="var(--ds-background-neutral-bold, #44546F)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </section>
            {/* Dashboard Bar card - Cards per Label */}
            {cardsPerLabel.length > 0 ? (
              <section className="dashboard-card">
                <DashBoardCardHeader title="Cards per label" />
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  maxHeight={"404px"}
                >
                  <BarChart
                    data={cardsPerLabel}
                    margin={{
                      top: 0,
                      right: -32,
                      left: -32,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="title" tickLine={false} />
                    <YAxis allowDecimals={false} stroke="" tickMargin={8} />
                    <Tooltip />
                    <Bar dataKey="count">
                      {cardsPerLabel.map((label) => (
                        <Cell key={`cell-${label.id}`} fill={label.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </section>
            ) : (
              <DashBoardCardEmpty type={"label"} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function DashBoardCardEmpty({ type }) {
  const { title, imgUrl, meg } = getEmptyBoardCard(type)
  return (
    <div className="dashboard-card empty-card ">
      <DashBoardCardHeader title={title} />
      <main>
        <img src={imgUrl} alt="" />
        <p>{meg}</p>
        <Button>Add one now</Button>
      </main>
    </div>
  )
}

function DashBoardCardHeader({ title }) {
  return (
    <header className="dashboard-card-header">
      <h4 className="title">{title}</h4>
      <SvgIcon iconName={"more"} size={"md"} />
    </header>
  )
}
