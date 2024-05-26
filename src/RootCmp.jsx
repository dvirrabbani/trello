import { Routes, Route } from "react-router"
// Pages
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { BoardIndex } from "./pages/BoardIndex"
import { BoardDetails } from "./pages/BoardDetails"
import { TaskDetails } from "./pages/TaskDetails"
// Layouts
import { BoardLayout } from "./layout/board/BoardLayout"

export function RootCmp() {
  return (
    <div className="main-app">
      <Routes>
        <Route exact={true} path={"/"} element={<Home />} />
        <Route exact={true} path={"/login"} element={<Login />} />
        <Route path="board" element={<BoardLayout />}>
          <Route index element={<BoardIndex />} />
          <Route path=":boardId" element={<BoardDetails />}>
            <Route path=":groupId/:taskId" element={<TaskDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
