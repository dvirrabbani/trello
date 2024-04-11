import React from "react"
import { Routes, Route, Navigate } from "react-router"
import { Workspace } from "./pages/Workspace"
import { BoardDetails } from "./pages/BoardDetails"
import { TaskDetails } from "./pages/TaskDetails"
import { AppHeader } from "./cmps/AppHeader"

export function RootCmp() {
  return (
    <div className="main-app">
      <AppHeader />
      <main>
        <Routes>
          <Route
            exact={true}
            path={"/"}
            element={<Navigate to={"/workspace"} />}
          />
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
