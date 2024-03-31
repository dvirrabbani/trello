import React from "react"
import { Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { Workspace } from "./pages/Workspace"
import { BoardDetails } from "./pages/BoardDetails"
import { TaskDetails } from "./pages/TaskDetails"

export function RootCmp() {
  return (
    <div>
      <main>
        <Routes>
          <Route exact={true} path={"/"} element={<Home />} />
          <Route
            exact={true}
            path={"/workspace"}
            element={<Workspace />}
          ></Route>
          <Route
            exact={true}
            path={"/board/:boardId"}
            element={<BoardDetails />}
          >
            <Route
              exact={true}
              path={"/board/:boardId/:groupId/:taskId"}
              element={<TaskDetails />}
            />
          </Route>
        </Routes>
      </main>
    </div>
  )
}
