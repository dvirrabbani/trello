export const DEMO_BOARD_LIST = [
  {
    _id: "b101",
    title: "Robot dev proj",
    isStarred: false,
    archivedAt: 1589983468418,
    createdBy: {
      userId: "u101",
      fullname: "Abi Abambi",
      imgUrl: "http://some-img",
    },
    style: {
      backgroundColor: "rgb(11, 80, 175)",
      bgImage:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/698x960/d156423cadf3438ddc90c80793a5fbfa/photo-1588268317073-67baf5721097.jpg",
    },
    labels: [
      { id: "l101", title: "Done", color: "#4bce97" },
      { id: "l102", title: "Progress", color: "#e2b203" },
      { id: "l103", title: "", color: "#faa53d" },
      { id: "l104", title: "", color: "#f87462" },
    ],
    members: [
      {
        _id: "u101",
        fullname: "Dvir Rabbani",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
      },
      {
        _id: "u102",
        fullname: "Yuval Mor",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/170.png",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Group 1",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "t101",
            title: "Replace logo",
            description: "description",
            checklists: [
              {
                id: "checklist1",
                title: "Daily Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Complete morning workout",
                    isDone: true,
                  },
                  {
                    id: "todo2",
                    title: "Prepare breakfast",
                    isDone: true,
                  },
                  {
                    id: "todo3",
                    title: "Attend team meeting",
                    isDone: true,
                  },
                ],
              },
              {
                id: "checklist2",
                title: "Weekly Goals",
                todos: [
                  {
                    id: "todo4",
                    title: "Review progress on project",
                    isDone: true,
                  },
                  {
                    id: "todo5",
                    title: "Submit weekly report",
                    isDone: true,
                  },
                  {
                    id: "todo6",
                    title: "Plan weekend activities",
                    isDone: true,
                  },
                ],
              },
            ],
            style: undefined,
          },
          {
            id: "t102",
            title: "Add Samples",
            description: "description",
            style: {
              isFull: false,
              background:
                "https://trello.com/1/cards/6610204c2098dfd601dd64f0/attachments/6610204c2098dfd601dd6517/previews/6610204c2098dfd601dd651b/download/shutterstock_88924612.jpg",
            },
          },
        ],
        style: undefined,
      },
      {
        id: "g102",
        title: "Group 2",
        tasks: [
          {
            id: "t103",
            title: "Do that",
            description: "description",
            archivedAt: 1589983468418,
            dueDate: 1649358748000,
            style: {
              isFull: true,
              background: "#26de81",
            },
          },
          {
            id: "t104",
            title: "Assign project tasks",
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
                id: "checklist1",
                title: "Daily Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Complete morning workout",
                    isDone: true,
                  },
                  {
                    id: "todo2",
                    title: "Prepare breakfast",
                    isDone: true,
                  },
                  {
                    id: "todo3",
                    title: "Attend team meeting",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checklist2",
                title: "Weekly Goals",
                todos: [
                  {
                    id: "todo4",
                    title: "Review progress on project",
                    isDone: false,
                  },
                  {
                    id: "todo5",
                    title: "Submit weekly report",
                    isDone: true,
                  },
                  {
                    id: "todo6",
                    title: "Plan weekend activities",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checklist3",
                title: "Monthly Tasks",
                todos: [
                  {
                    id: "todo7",
                    title: "Pay rent",
                    isDone: true,
                  },
                  {
                    id: "todo8",
                    title: "Schedule dentist appointment",
                    isDone: true,
                  },
                  {
                    id: "todo9",
                    title: "Organize files",
                    isDone: true,
                  },
                ],
              },
            ],
            attachments: [
              {
                id: "at01",
                imgUrl:
                  "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/320x480/b420ee2efc41c440a164050b877028d5/photo-1711619034404-665a4bc6dcd3.jpg",
              },
              {
                id: "at02",
                imgUrl:
                  "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/186f5d8012576ac86104adbc9d5b8d75/photo-1712148910821-8fe718c418af.jpg",
              },
            ],
            memberIds: [],
            labelIds: ["l101", "l102"],
            dueDate: 1712602448965,
            byMember: {
              _id: "u101",
              username: "Tal",
              fullname: "Tal Tarablus",
              imgUrl:
                "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
            },
            style: {
              isFull: false,
              background: "#26de81",
            },
          },
        ],
        style: undefined,
      },
    ],
    activities: [
      {
        id: "a101",
        txt: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Abi Abambi",
          imgUrl: "http://some-img",
        },

        task: {
          id: "t101",
          title: "Replace Logo",
        },
      },
    ],

    cmpsOrder: ["status-picker", "member-picker", "date-picker"],
  },
  {
    _id: "b102",
    title: "Task management",
    isStarred: true,
    archivedAt: 1589983468418,
    createdBy: {
      userId: "u101",
      fullname: "Abi Abambi",
      imgUrl:
        "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
    },
    style: {
      backgroundColor: "#395e63",
      bgImage:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/964891d63f67d6c53a74b8908fc8c3d5/photo-1711139299064-f60e2753163f.jpg",
    },
    labels: [
      { id: "l101", title: "Done", color: "#4bce97" },
      { id: "l102", title: "Progress", color: "#e2b203" },
    ],
    members: [
      {
        _id: "u101",
        fullname: "Dvir Rabbani",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
      },
      {
        _id: "u102",
        fullname: "Yuval Mor",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/170.png",
      },
    ],
    groups: [
      {
        id: "g109",
        title: "Group 2",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "t1012",
            title: "Replace logo",
            style: undefined,
          },
          {
            id: "t1013",
            title: "Add Samples",
            style: undefined,
          },
        ],
        style: undefined,
      },
      {
        id: "g110",
        title: "Group 2",
        tasks: [
          {
            id: "t114",
            title: "Do that",
            archivedAt: 1589983468418,
            style: undefined,
          },
          {
            id: "t115",
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
              isFull: false,
              background: "#26de81",
            },
          },
        ],
        style: undefined,
      },
    ],
    activities: [
      {
        id: "a112",
        txt: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Abi Abambi",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
        },
        taskId: "t115",
      },
    ],

    cmpsOrder: ["status-picker", "member-picker", "date-picker"],
  },
]
