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
      {
        id: "l101",
        title: "Done",
        color: "#61bd4f",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#61bd33",
      },
    ],
    members: [
      {
        _id: "u101",
        fullname: "Tal Tarablus",
        imgUrl: "https://www.google.com",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Group 1",
        archivedAt: 1589983468418,
        tasks: [
          {
            id: "c101",
            title: "Replace logo",
          },
          {
            id: "c102",
            title: "Add Samples",
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
          id: "c101",
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
      bgImage:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/698x960/d156423cadf3438ddc90c80793a5fbfa/photo-1588268317073-67baf5721097.jpg",
    },
    labels: [
      {
        id: "l101",
        title: "Done",
        color: "#61bd4f",
      },
      {
        id: "l102",
        title: "Progress",
        color: "#61bd33",
      },
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
            id: "c1012",
            title: "Replace logo",
          },
          {
            id: "c1013",
            title: "Add Samples",
          },
        ],
        style: {},
      },
      {
        id: "g110",
        title: "Group 2",
        tasks: [
          {
            id: "c114",
            title: "Do that",
            archivedAt: 1589983468418,
          },
          {
            id: "c115",
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
    ],
    activities: [
      {
        id: "a112",
        txt: "Changed Color",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullname: "Abi Abambi",
          imgUrl: "http://some-img",
        },
        task: {
          id: "c101",
          title: "Replace Logo",
        },
      },
    ],

    cmpsOrder: ["status-picker", "member-picker", "date-picker"],
  },
]
