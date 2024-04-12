export const DEMO_BOARD_LIST = [
  {
    _id: "b101",
    title: "Product Development",
    isStarred: false,
    archivedAt: null,
    createdBy: {
      _id: "u101",
      fullName: "Dvir Rabbani",
      imgUrl:
        "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
    },
    style: {
      bgImg: "https://images.unsplash.com/photo-1699116548123-73affe0987b7",
      bgColor: "#7A57D1",
    },
    labels: [
      { id: "l101", title: "Done", bgColor: "#4bce97" },
      { id: "l102", title: "", bgColor: "#f44336" },
      { id: "l103", title: "In progress", bgColor: "#e91e63" },
      { id: "l104", title: "on hold", bgColor: "#9c27b0" },
      { id: "l105", title: "", bgColor: "#673ab7" },
      { id: "l106", title: "", bgColor: "#3f51b5" },
    ],
    members: [
      {
        _id: "u101",
        fullName: "Dvir Rabbani",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
      },
      {
        _id: "u102",
        fullName: "Yuval Mor",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
      },
      {
        _id: "u103",
        fullName: "Tal Amit",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Project Planning",
        archivedAt: null,
        tasks: [
          {
            id: "t101",
            title: "Assign project tasks",
            description:
              "Project tasks should be assigned to team members based on their skills and availability.",
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
              {
                id: "AbCde",
                txt: "@Dvir, great work on this! Would you mind addressing the edge case mentioned in line 54?",
                createdAt: 1591002317436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
                },
              },
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  _id: "u103",
                  fullname: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
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
            memberIds: ["u101", "u102", "u103"],
            labelIds: ["l101", "l102", "l103", "l104", "l105", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t102",
            title: "Define project scope",
            description:
              "scenarios, use cases, features, and functions that characterize a project's value.",
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
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  _id: "u103",
                  fullname: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
            ],
            checklists: [
              {
                id: "checklist1",
                title: "Project Scope Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Identify project requirements",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Define project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Identify project deliverables",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checklist2",
                title: "Scope Verification Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Verify project scope",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Confirm project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Validate project deliverables",
                    isDone: false,
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
            ],
            memberIds: ["u101", "u102"],
            labelIds: ["l101", "l104", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t103",
            title: "Identify project stakeholders",
            description:
              "stakeholders are individuals or groups who have an interest in the success of a project.",
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
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  _id: "u103",
                  fullname: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
                },
              },
            ],
            checklists: [
              {
                id: "checklist1",
                title: "Stakeholder Identification Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Identify project sponsors",
                    isDone: true,
                  },
                  {
                    id: "todo2",
                    title: "Identify project customers",
                    isDone: true,
                  },
                  {
                    id: "todo3",
                    title: "Identify project users",
                    isDone: false,
                  },
                ],
              },
            ],
            attachments: [],
            memberIds: [],
            labelIds: [],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
            },
            style: {
              bgColor: "black",
              bgImg:
                "https://res.cloudinary.com/dviyyjlac/image/upload/v1680503351/siibq2pbkrmx4ljme0ih.webp",
              isCoverFull: false,
            },
          },
          {
            id: "t104",
            title: "Create project timeline",
            description: "",
            comments: [
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  _id: "u103",
                  fullname: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
                },
              },
            ],
            checklists: [],
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
            memberIds: ["u103"],
            labelIds: [],
            dueDate: null,
            byMember: {
              _id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
        ],
      },
      {
        id: "g102",
        title: "Design",
        archivedAt: 1710340183596,
        tasks: [
          {
            id: "t101",
            title: "Assign project tasks",
            description:
              "Project tasks should be assigned to team members based on their skills and availability.",
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
              {
                id: "AbCde",
                txt: "@Dvir, great work on this! Would you mind addressing the edge case mentioned in line 54?",
                createdAt: 1591002317436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
                },
              },
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  _id: "u103",
                  fullname: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
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
            memberIds: ["u101", "u102", "u103"],
            labelIds: ["l101", "l102", "l103", "l104", "l105", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t102",
            title: "Define project scope",
            description:
              "scenarios, use cases, features, and functions that characterize a project's value.",
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
                title: "Project Scope Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Identify project requirements",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Define project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Identify project deliverables",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checklist2",
                title: "Scope Verification Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Verify project scope",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Confirm project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Validate project deliverables",
                    isDone: false,
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
            ],
            memberIds: ["u101", "u102"],
            labelIds: ["l101", "l104", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
        ],
      },
      {
        id: "g103",
        title: "Development",
        archivedAt: null,
        tasks: [
          {
            id: "t102",
            title: "Define project scope",
            description:
              "scenarios, use cases, features, and functions that characterize a project's value.",
            comments: [],
            checklists: [
              {
                id: "checklist1",
                title: "Project Scope Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Identify project requirements",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Define project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Identify project deliverables",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checklist2",
                title: "Scope Verification Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Verify project scope",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Confirm project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Validate project deliverables",
                    isDone: false,
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
            ],
            memberIds: ["u101", "u102"],
            labelIds: ["l101", "l104", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
        ],
      },
      {
        id: "g104",
        title: "Testing",
        archivedAt: null,
        tasks: [
          {
            id: "t101",
            title: "Assign project tasks",
            description:
              "Project tasks should be assigned to team members based on their skills and availability.",
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
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
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
            memberIds: ["u101", "u102", "u103"],
            labelIds: ["l101", "l102", "l103", "l104", "l105", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t102",
            title: "Define project scope",
            description:
              "scenarios, use cases, features, and functions that characterize a project's value.",
            comments: [],
            checklists: [
              {
                id: "checklist1",
                title: "Project Scope Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Identify project requirements",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Define project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Identify project deliverables",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checklist2",
                title: "Scope Verification Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Verify project scope",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Confirm project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Validate project deliverables",
                    isDone: false,
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
            ],
            memberIds: ["u101", "u102"],
            labelIds: ["l101", "l104", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t104",
            title: "Create project timeline",
            description: "",
            comments: [],
            checklists: [],
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
            memberIds: ["u103"],
            labelIds: [],
            dueDate: null,
            byMember: {
              _id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
        ],
      },
      {
        id: "g105",
        title: "Deployment",
        archivedAt: 1710340183596,
        tasks: [
          {
            id: "t101",
            title: "Assign project tasks",
            description:
              "Project tasks should be assigned to team members based on their skills and availability.",
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
              {
                id: "AbCde",
                txt: "@Dvir, great work on this! Would you mind addressing the edge case mentioned in line 54?",
                createdAt: 1591002317436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
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
            memberIds: ["u101", "u102", "u103"],
            labelIds: ["l101", "l102", "l103", "l104", "l105", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t104",
            title: "Create project timeline",
            description: "",
            comments: [],
            checklists: [],
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
            memberIds: ["u103"],
            labelIds: [],
            dueDate: null,
            byMember: {
              _id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
        ],
      },
    ],
    activities: [
      {
        id: "a101",
        txt: "Dvir Rabbani add new Group Apr 12 2024 at 12:12 PM",
        createdAt: 154514,
        byMember: {
          _id: "u101",
          fullName: "Dvir Rabbani",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
        },
      },
      {
        id: "a102",
        txt: "Dvir Rabbani add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591002317436,
        byMember: {
          _id: "u101",
          fullName: "Dvir Rabbani",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
        },
      },
      {
        id: "a103",
        txt: "Yuval Mor add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591003217436,
        byMember: {
          _id: "u102",
          fullName: "Yuval Mor",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
        },
      },
      {
        id: "a104",
        txt: "Tal Amit add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591004117436,
        byMember: {
          _id: "u103",
          fullName: "Tal Amit",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
        },
      },
    ],
  },
  {
    _id: "b101",
    title: "Vacation Planning",
    isStarred: false,
    archivedAt: null,
    createdBy: {
      _id: "u102",
      fullName: "Yuval Mor",
      imgUrl:
        "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
    },
    style: {
      bgImg:
        "https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/rainbow.svg",
      bgColor: "#a869c1",
    },
    labels: [
      { id: "l101", title: "Done", bgColor: "#4bce97" },
      { id: "l102", title: "", bgColor: "#f44336" },
      { id: "l103", title: "", bgColor: "#3f51b5" },
    ],
    members: [
      {
        _id: "u101",
        fullName: "Dvir Rabbani",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
      },
      {
        _id: "u102",
        fullName: "Yuval Mor",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
      },
      {
        _id: "u103",
        fullName: "Tal Amit",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
      },
    ],
    groups: [
      {
        id: "g101",
        title: "Flights",
        archivedAt: null,
        tasks: [
          {
            id: "t101",
            title: "Book flight tickets",
            description:
              "Book flight tickets to destination and back. Make sure to choose the best seats.",
            comments: [],
            checklists: [
              {
                id: "checklist1",
                title: "Flight Booking Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Search for flights",
                    isDone: true,
                  },
                  {
                    id: "todo2",
                    title: "Choose best seats",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Book tickets",
                    isDone: false,
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
            memberIds: ["u103"],
            labelIds: ["l101", "l102"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t102",
            title: "Book hotel",
            description:
              "Book a hotel room for the duration of the vacation. Make sure to choose a hotel with good reviews.",
            comments: [],
            checklists: [
              {
                id: "checklist1",
                title: "Hotel Booking Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Search for hotels",
                    isDone: true,
                  },
                  {
                    id: "todo2",
                    title: "Choose best hotel",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Book room",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checklist2",
                title: "Hotel Room Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Check in",
                    isDone: false,
                  },
                  {
                    id: "todo2",
                    title: "Check out",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Enjoy your stay",
                    isDone: false,
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
            ],
            memberIds: [],
            labelIds: ["l103"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
        ],
      },
      {
        id: "g102",
        title: "Family",
        archivedAt: 1710340183596,
        tasks: [
          {
            id: "t101",
            title: "Buy gifts",
            description:
              "Buy gifts for family members. Make sure to choose the best gifts.",
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
              {
                id: "AbCde",
                txt: "@Dvir, great work on this! Would you mind addressing the edge case mentioned in line 54?",
                createdAt: 1591002317436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
                },
              },
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  _id: "u103",
                  fullname: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  _id: "u102",
                  fullname: "Yuval Mor",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
                },
              },
            ],
            checklists: [
              {
                id: "checklist1",
                title: "Gift Buying Tasks",
                todos: [
                  {
                    id: "todo1",
                    title: "Search for gifts",
                    isDone: true,
                  },
                  {
                    id: "todo2",
                    title: "Choose best gifts",
                    isDone: false,
                  },
                  {
                    id: "todo3",
                    title: "Buy gifts",
                    isDone: false,
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
            memberIds: ["u101", "u102", "u103"],
            labelIds: [],
            dueDate: null,
            byMember: {
              _id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
            },
            style: {
              bgColor: "#53A8E2",
              bgImg: null,
              isCoverFull: true,
            },
          },
        ],
      },
    ],
    activities: [
      {
        id: "a102",
        txt: "Dvir Rabbani add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591002317436,
        byMember: {
          _id: "u101",
          fullName: "Dvir Rabbani",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/5dda835ea341db563754a5f1/a13d8e3e5c75f27daf3519e37a6538e3/170.png",
        },
      },
      {
        id: "a103",
        txt: "Yuval Mor add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591003217436,
        byMember: {
          _id: "u102",
          fullName: "Yuval Mor",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/5e118d398d051d6d71ffe426/d849d5d80478e0bd4c34eeef5b0eb90c/30.png",
        },
      },
      {
        id: "a104",
        txt: "Tal Amit add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591004117436,
        byMember: {
          _id: "u103",
          fullName: "Tal Amit",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
        },
      },
    ],
  },
]
