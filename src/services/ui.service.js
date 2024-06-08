import dayjs from "dayjs"
import { em } from "polished"

const BOARD_LABELS = [
  { id: "l101", bgColor: "#baf3db", title: "", name: "Mint Green" },
  { id: "l102", bgColor: "#f8e6a0", title: "", name: "Light Yellow" },
  { id: "l103", bgColor: "#ffe2bd", title: "", name: "Peach" },
  { id: "l104", bgColor: "#ffd2cc", title: "", name: "Light Coral" },
  { id: "l105", bgColor: "#dfd8fd", title: "", name: "Lavender" },
  { id: "l106", bgColor: "#4bce97", title: "", name: "Green" },
  { id: "l107", bgColor: "#e2b203", title: "", name: "Gold" },
  { id: "l108", bgColor: "#faa53d", title: "", name: "Orange" },
  { id: "l109", bgColor: "#f87462", title: "", name: "Coral" },
  { id: "l1010", bgColor: "#9f8fef", title: "", name: "Purple" },
  { id: "l1011", bgColor: "#1f845a", title: "", name: "Dark Green" },
  { id: "l1012", bgColor: "#946f00", title: "", name: "Dark Gold" },
  { id: "l1013", bgColor: "#b65c02", title: "", name: "Brown" },
  { id: "l1014", bgColor: "#ca3521", title: "", name: "Red" },
  { id: "l1015", bgColor: "#6e5dc6", title: "", name: "Blue Violet" },
  { id: "l1016", bgColor: "#cce0ff", title: "", name: "Light Blue" },
  { id: "l1017", bgColor: "#c1f0f5", title: "", name: "Aqua" },
  { id: "l1018", bgColor: "#D3F1A7", title: "", name: "Light Green" },
  { id: "l1019", bgColor: "#fdd0ec", title: "", name: "Pink" },
  { id: "l1020", bgColor: "#dcdfe4", title: "", name: "Light Gray" },
  { id: "l1021", bgColor: "#579dff", title: "", name: "Sky Blue" },
  { id: "l1022", bgColor: "#60c6d2", title: "", name: "Turquoise" },
  { id: "l1023", bgColor: "#94c748", title: "", name: "Lime Green" },
  { id: "l1024", bgColor: "#e774bb", title: "", name: "Magenta" },
  { id: "l1025", bgColor: "#8590a2", title: "", name: "Slate Gray" },
  { id: "l1026", bgColor: "#0c66e4", title: "", name: "Royal Blue" },
  { id: "l1027", bgColor: "#1d7f8c", title: "", name: "Teal" },
  { id: "l1028", bgColor: "#5b7f24", title: "", name: "Olive" },
  { id: "l1029", bgColor: "#ae4787", title: "", name: "Dark Magenta" },
  { id: "l1030", bgColor: "#ae4787", title: "", name: "Dark Magenta" },
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

const BG_SVG = [
  {
    // Light blue
    bgImg:
      "https://res.cloudinary.com/df0eaacho/image/upload/v1717254967/707f35bc691220846678_noqfjy.svg",
    colorRgb: "34,140,213",
    themeColor: "light",
    emoji: "❄️",
  },
  // Dark blue
  {
    bgImg:
      "https://res.cloudinary.com/df0eaacho/image/upload/v1717255252/d106776cb297f000b1f4_yintmk.svg",
    colorRgb: "9,50,108",
    themeColor: "light",
    emoji: "🌊",
  },
  // Dark purple
  {
    bgImg:
      "https://res.cloudinary.com/df0eaacho/image/upload/v1717255566/8ab3b35f3a786bb6cdac_nzdemf.svg",
    colorRgb: "103,66,132",
    themeColor: "light",
    emoji: "🔮",
  },
  // Light Purple
  {
    bgImg:
      "https://res.cloudinary.com/df0eaacho/image/upload/v1717168335/yer4i01erod1gpcvqmff.svg",
    colorRgb: "168, 105, 193",
    themeColor: "light",
    emoji: "🌈",
  },
  // Orange
  {
    bgImg:
      "https://res.cloudinary.com/df0eaacho/image/upload/v1717255972/aec98becb6d15a5fc95e_xwapb2.svg",
    colorRgb: "239, 118, 58",
    themeColor: "light",
    emoji: "🍑",
  },
  // Green
  {
    bgImg:
      "https://res.cloudinary.com/df0eaacho/image/upload/v1717264208/92e67a71aaaa98dea5ad_sjeey7.svg",
    colorRgb: "63, 164, 149",
    themeColor: "light",
    emoji: "🌎",
  },
]

const BG_IMG = [
  {
    bgImg:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1714/5ea1985d7774d2d37e2534a98813a12f/photo-1516394531575-d9bbfc59ef97.webp",
    colorRgb: "23, 39, 64",
    themeColor: "light",
  },
  {
    bgImg:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1152/9c05f34757e34207525e730c4b827391/photo-1497436072909-60f360e1d4b1.jpg",
    colorRgb: "53,124,121",
    themeColor: "light",
  },
  {
    bgImg:
      "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/2048x2048/22ec03aab9d36ea49139c569a62bb079/shutterstock_134707556.jpg",
    colorRgb: "89, 68, 85",
    themeColor: "light",
  },
  {
    bgImg:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/dbcdcd797bbbabb501ababeb0c947f2c/photo-1496769336828-c522a3a7e33c.jpg",
    colorRgb: "103,143,67",
    themeColor: "light",
  },
]

export const uiService = {
  getBoardLabels,
  getDefaultBoardLabels,
  getCoverColors,
  isRgbBright,
  getDominantColor,
  getDueDateStatusAndClassName,
  getBoardBgImg,
  getBoardBgSvg,
}

function getBoardBgImg() {
  return BG_IMG
}

function getBoardBgSvg() {
  return BG_SVG
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

function getDueDateStatusAndClassName(timestamp, isCompleted) {
  const now = dayjs()
  const dueDate = dayjs(timestamp)

  const overdueRecently = now.subtract(1, "day")
  const dueSoon = now.add(24, "hour")

  if (isCompleted) {
    return { status: "Complete", className: "completed" }
  } else if (dueDate.isBefore(overdueRecently)) {
    return { status: "Overdue", className: "past-overdue" }
  } else if (dueDate.isBefore(now) && dueDate.isAfter(overdueRecently)) {
    return { status: "Overdue", className: "overdue-recently" }
  } else if (dueDate.isBefore(dueSoon) && dueDate.isAfter(now)) {
    return { status: "Due soon", className: "due-soon" }
  } else {
    return { status: "", className: "" }
  }
}

function getDominantColor(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "Anonymous"
    img.onload = function () {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      canvas.width = this.naturalWidth
      canvas.height = this.naturalHeight
      ctx.drawImage(this, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixelArray = imageData.data

      let R = 0,
        G = 0,
        B = 0
      let count = 0
      const length = pixelArray.length

      for (let i = 0; i < length; i += 16) {
        count++

        R += pixelArray[i]
        G += pixelArray[i + 1]
        B += pixelArray[i + 2]
      }

      R = ~~(R / count)
      G = ~~(G / count)
      B = ~~(B / count)

      resolve(`${R},${G},${B}`)
    }
    img.onerror = function () {
      reject("Failed to load image")
    }
    img.src = imageUrl
  })
}

function isRgbBright(rgb) {
  let rgbColor = `rgb(${rgb})`
  const colorValues = rgbColor.match(/\d+/g)
  const r = parseInt(colorValues[0])
  const g = parseInt(colorValues[1])
  const b = parseInt(colorValues[2])

  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  const res = brightness >= 155 ? true : false
  return res
}

export function getEmptyBoardCard(type) {
  switch (type) {
    case "list":
      return {
        imgUrl: "https://trello.com/assets/58551b69c73b0c3abe12.png",
        msg: "This board doesn't have any lists yet.",
        title: "Cards per list",
      }
    case "dueDate":
      return {
        imgUrl: "https://trello.com/assets/ef769d2a141355c08d0e.png",
        msg: "This board doesn't have any cards with due dates yet.",
        title: "Cards per dueDate",
      }
    case "label":
      return {
        imgUrl: "https://trello.com/assets/a5465d28947b51ca12ca.png",
        msg: "This board doesn't have any cards with labels yet.",
        title: "Cards per label",
      }
    default:
      return {
        imgUrl: "",
        msg: "",
        title: "",
      }
  }
}
