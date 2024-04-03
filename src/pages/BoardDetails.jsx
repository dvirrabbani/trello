import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router"
import { useSelector } from "react-redux"
import { GroupList } from "../cmps/GroupList"
import { loadBoard, updateCurrentBoard } from "../store/board.actions"
import { BoardDetailsHeader } from "../cmps/BoardDetailsHeader"
import SvgIcon from "../cmps/SvgIcon"

export function BoardDetails() {
  const params = useParams()
  const board = useSelector((storeState) => storeState.boardModule.board)

  useEffect(() => {
    loadBoard(params.boardId)
  }, [params.boardId])

  const groups = [
    {
      id: "g101",
      title: "Group 1",
      archivedAt: 1589983468418,
      tasks: [
        {
          id: "c101",
          title: "Replace logo",
          description: "description",
        },
        {
          id: "c102",
          title: "Add Samples",
          description: "description",
        },
      ],
      style: {},
    },
    {
      id: "g102",
      title: "Group 2",
      tasks: [
        {
          id: "c103",
          title: "Do that",
          description: "description",
          archivedAt: 1589983468418,
        },
        {
          id: "c104",
          title: "Help me",
          description: "description",
          comments: [
            {
              id: "ZdPnm",
              txt: "also @yaronb please CR this",
              createdAt: 1590999817436,
              byMember: {
                _id: "u101",
                fullname: "Tal Tarablus",
                imgUrl:
                  "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              },
            },
          ],
          checklists: [
            {
              id: "YEhmF",
              title: "Checklist",
              todos: [
                {
                  id: "212jX",
                  title: "To Do 1",
                  isDone: false,
                },
              ],
            },
          ],
          memberIds: ["u101"],
          labelIds: ["l101", "l102"],
          dueDate: 16156215211,
          byMember: {
            _id: "u101",
            username: "Tal",
            fullname: "Tal Tarablus",
            imgUrl:
              "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
          },
          style: {
            bgColor: "#26de81",
          },
        },
      ],
      style: {},
    },
    {
      id: "g103",
      title: "new group",
      tasks: [
        {
          id: "c103",
          title: "Do that",
          description: "description",
          archivedAt: 1589983468418,
        },
        {
          id: "c104",
          title: "Help me",
          description: "description",
          comments: [
            {
              id: "ZdPnm",
              txt: "also @yaronb please CR this",
              createdAt: 1590999817436,
              byMember: {
                _id: "u101",
                fullname: "Tal Tarablus",
                imgUrl:
                  "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
              },
            },
          ],
          checklists: [
            {
              id: "YEhmF",
              title: "Checklist",
              todos: [
                {
                  id: "212jX",
                  title: "To Do 1",
                  isDone: false,
                },
              ],
            },
          ],
          memberIds: ["u101"],
          labelIds: ["l101", "l102"],
          dueDate: 16156215211,
          byMember: {
            _id: "u101",
            username: "Tal",
            fullname: "Tal Tarablus",
            imgUrl:
              "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
          },
          style: {
            bgColor: "#26de81",
          },
        },
      ],
      style: {},
    },
  ]

  function onAddGroup() {
    updateCurrentBoard(null, null, {
      key: "groups",
      value: groups,
    })
  }

  if (!board) return <div>Loading..</div>

  //TODO - think it need to be in store?
  const boardStyle = {
    backgroundColor: board.style.backgroundColor,
    color: "white",
  }

  return (
    <div className="board-details-container" style={boardStyle}>
      <div className="board-sidebar">Sidebar</div>
      <div
        className="board-main-content flex column"
        style={{ backgroundImage: `url(${board.style.bgImage})` }}
      >
        <BoardDetailsHeader title={board.title} members={board.members} />
        <div className="board-groups-container full">
          <GroupList groups={board.groups} />
          <button className="add-group-btn full" onClick={onAddGroup}>
            <SvgIcon iconName="plus" />
            <span>Add another group</span>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
