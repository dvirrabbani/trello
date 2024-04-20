import React, { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router"
import { Workspace } from "./pages/Workspace"
import { BoardDetails } from "./pages/BoardDetails"
import { TaskDetails } from "./pages/TaskDetails"
import { AppHeader } from "./cmps/AppHeader"
import { loadBoards } from "./store/board.actions"
import { Login } from "./pages/Login"

export function RootCmp() {
  // TODO: Remove load board when redirect to workspace from login page
  useEffect(() => {
    loadBoards()
  }, [])

  return (
    <div className="main-app">
      <AppHeader />
      <Routes>
        <Route
          exact={true}
          path={"/"}
          element={<Navigate to={"/workspace"} />}
        />
        <Route exact={true} path={"/login"} element={<Login />} />
        <Route exact={true} path={"/workspace"} element={<Workspace />}></Route>
        <Route exact={true} path={"/board/:boardId"} element={<BoardDetails />}>
          <Route
            exact={true}
            path={"/board/:boardId/:groupId/:taskId"}
            element={<TaskDetails />}
          />
        </Route>
      </Routes>
    </div>
  )
}
