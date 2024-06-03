import { utilService } from "../services/util.service"

const boardUser = {
  email: "taltarablus@gmail.com",
  username: "Tal Tarablus",
  fullName: "Tal Tarablus",
  imgUrl: "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
  recentBoards: [],
}

const USERS = [
  {
    _id: "665c619dfba7227c8a9adc39",
    fullName: "Dvir Rabbani",
    username: "Dvir@gmail.com",
    imgUrl: "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
    recentBoards: [],
    createdAt: "2024-06-02T12:12:13.000Z",
  },
  {
    _id: "665c61cefba7227c8a9adc3b",
    fullName: "Yuval Mor",
    username: "Yuval@gmail.com",
    imgUrl: "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
    recentBoards: [],
    createdAt: "2024-06-02T12:13:02.000Z",
  },
  {
    _id: "665c61f8fba7227c8a9adc3c",
    fullName: "Tal Amit",
    username: "TalAmit@gmail.com",
    imgUrl: "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
    recentBoards: [],
    createdAt: "2024-06-02T12:13:44.000Z",
  },
  {
    _id: "665c6212fba7227c8a9adc3d",
    fullName: "Tal Tarablus",
    username: "TalAmit@gmail.com",
    imgUrl: "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
    recentBoards: [],
    createdAt: "2024-06-02T12:14:10.000Z",
  },
]

export const DEMO_BOARD = {
  title: "New Board",
  style: {
    bgImg: "https://res.cloudinary.com/df0eaacho/image/upload/v1717255566/8ab3b35f3a786bb6cdac_nzdemf.svg",
    colorRgb: "103,66,132",
    themeColor: "light",
  },
  members: [boardUser],
  groups: [],
  labels: [
    {
      id: "l107",
      bgColor: "#e2b203",
      title: "",
      name: "Gold",
    },
    {
      id: "l108",
      bgColor: "#faa53d",
      title: "",
      name: "Orange",
    },
    {
      id: "l109",
      bgColor: "#f87462",
      title: "",
      name: "Coral",
    },
    {
      id: "l1010",
      bgColor: "#9f8fef",
      title: "",
      name: "Purple",
    },
    {
      id: "l1011",
      bgColor: "#1f845a",
      title: "",
      name: "Dark Green",
    },
    {
      id: "l1012",
      bgColor: "#946f00",
      title: "",
      name: "Dark Gold",
    },
  ],
  activities: [
    {
      type: "Add Board",
      id: utilService.makeId(),
      createdAt: 1717330587237,
      byMember: boardUser,

      txt: `${boardUser.fullName} add new board`,
    },
  ],
  isStarred: false,
  archivedAt: null,
  createdBy: boardUser,
}
