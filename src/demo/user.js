import dayjs from "dayjs"

export const DEMO_USER = {
  id: "u101",
  fullName: "Tal Tarablus",
  username: "abi@ababmi.com",
  imgUrl: "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
  recentBoards: [
    { id: "b101", date: dayjs().subtract(1, "day").unix() },
    { id: "b102", date: dayjs().subtract(2, "day").unix() },
  ],
}

const USERS = [
  {
    email: "dvir@gmail.com",
    username: "Dvir Rabbani",
    fullName: "Dvir Rabbani",
    imgUrl: "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
    recentBoards: [],
  },
  {
    email: "yuval@gmail.com",
    username: "Yuval Mor",
    fullName: "Yuval Mor",
    imgUrl: "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
    recentBoards: [],
  },
  {
    email: "tal@gmail.com",
    username: "Tal Amit",
    fullName: "Tal Amit",
    imgUrl: "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
    recentBoards: [],
    createdAt: 1717345327831,
  },
  {
    email: "taltarablus@gmail.com",
    username: "Tal Tarablus",
    fullName: "Tal Tarablus",
    imgUrl: "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
    recentBoards: [],
    createdAt: "2024-06-02T16:16:22.000Z",
  },
]
