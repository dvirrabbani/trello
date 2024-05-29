import dayjs from "dayjs"

const BOARD_LABELS = [
  { id: "l101", bgColor: "#baf3db", title: "" },
  { id: "l102", bgColor: "#f8e6a0", title: "" },
  { id: "l103", bgColor: "#ffe2bd", title: "" },
  { id: "l104", bgColor: "#ffd2cc", title: "" },
  { id: "l105", bgColor: "#dfd8fd", title: "" },
  { id: "l106", bgColor: "#4bce97", title: "" },
  { id: "l107", bgColor: "#e2b203", title: "" },
  { id: "l108", bgColor: "#faa53d", title: "" },
  { id: "l109", bgColor: "#f87462", title: "" },
  { id: "l1010", bgColor: "#9f8fef", title: "" },
  { id: "l1011", bgColor: "#1f845a", title: "" },
  { id: "l1012", bgColor: "#946f00", title: "" },
  { id: "l1013", bgColor: "#b65c02", title: "" },
  { id: "l1014", bgColor: "#ca3521", title: "" },
  { id: "l1015", bgColor: "#6e5dc6", title: "" },
  { id: "l1016", bgColor: "#cce0ff", title: "" },
  { id: "l1017", bgColor: "#c1f0f5", title: "" },
  { id: "l1018", bgColor: "#D3F1A7", title: "" },
  { id: "l1019", bgColor: "#fdd0ec", title: "" },
  { id: "l1020", bgColor: "#dcdfe4", title: "" },
  { id: "l1021", bgColor: "#579dff", title: "" },
  { id: "l1022", bgColor: "#60c6d2", title: "" },
  { id: "l1023", bgColor: "#94c748", title: "" },
  { id: "l1024", bgColor: "#e774bb", title: "" },
  { id: "l1025", bgColor: "#8590a2", title: "" },
  { id: "l1026", bgColor: "#0c66e4", title: "" },
  { id: "l1027", bgColor: "#1d7f8c", title: "" },
  { id: "l1028", bgColor: "#5b7f24", title: "" },
  { id: "l1029", bgColor: "#ae4787", title: "" },
  { id: "l1030", bgColor: "#ae4787", title: "" },
]

const COVER_COLORS = [
  "#4bce97",
  "#e2b203",
  "#faa53d",
  "#f87462",
  "#9f8fef",
  "#1f845a",
  "#946f00",
  "#b65c02",
  "#ca3521",
  "#6e5dc6",
]

export const uiService = {
  getBoardLabels,
  getDefaultBoardLabels,
  getCoverColors,
  getDateStatusAndClassName,
}

function getBoardLabels() {
  return BOARD_LABELS
}

function getCoverColors() {
  return COVER_COLORS
}

function getDefaultBoardLabels() {
  return BOARD_LABELS.slice(6, 12)
}

function getDateStatusAndClassName(timestamp, isCompleted) {
  const now = dayjs()
  const dueDate = dayjs(timestamp)

  const overdueRecently = now.subtract(1, "day")
  const dueSoon = now.add(24, "hour")

  if (isCompleted) {
    return { status: "completed", className: "completed" }
  } else if (dueDate.isBefore(overdueRecently)) {
    return { status: "overdue", className: "past-overdue" }
  } else if (dueDate.isBefore(now) && dueDate.isAfter(overdueRecently)) {
    return { status: "overdue", className: "overdue-recently" }
  } else if (dueDate.isBefore(dueSoon) && dueDate.isAfter(now)) {
    return { status: "due soon", className: "due-soon" }
  } else {
    return { status: "", className: "" }
  }
}
