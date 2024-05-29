import dayjs from "dayjs"

export const DEMO_USER = {
  id: "u101",
  fullName: "Tal Tarablus",
  username: "abi@ababmi.com",
  password: "aBambi123",
  imgUrl:
    "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
  recentBoards: [
    { id: "b101", date: dayjs().subtract(1, "day").unix() },
    { id: "b102", date: dayjs().subtract(2, "day").unix() },
  ],
}
