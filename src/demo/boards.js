import { DEMO_BOARD } from "./const"
// console.log(JSON.stringify(DEMO_BOARD))
export const DEMO_BOARD_LIST = [
  {
    _id: "b101",
    title: "Product Development",
    isStarred: false,
    archivedAt: null,
    createdBy: {
      id: "u101",
      fullName: "Dvir Rabbani",
      imgUrl:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
    },
    style: {
      bgImg: "https://images.unsplash.com/photo-1699116548123-73affe0987b7",
      colorRgb: "163, 171, 168",
      themeColor: "dark",
    },
    labels: [
      { id: "l106", bgColor: "#4bce97", title: "To Do", name: "Green" },
      { id: "l107", bgColor: "#e2b203", title: "In Progress", name: "Gold" },
      { id: "l108", bgColor: "#faa53d", title: "Review", name: "Orange" },
      { id: "l109", bgColor: "#f87462", title: "Completed", name: "Coral" },
      { id: "l1010", bgColor: "#9f8fef", title: "Blocked", name: "Purple" },
      { id: "l1011", bgColor: "#1f845a", title: "On Hold", name: "Dark Green" },
      {
        id: "l1012",
        bgColor: "#946f00",
        title: "Cancelled",
        name: "Dark Gold",
      },
    ],
    members: [
      {
        id: "u101",
        fullName: "Dvir Rabbani",
        imgUrl:
          "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
      },
      {
        id: "u102",
        fullName: "Yuval Mor",
        imgUrl:
          "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
      },
      {
        id: "u103",
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
            id: "t106",
            title: "Define project scope",
            description: "",
            comments: [
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  id: "u103",
                  fullName: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
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
            members: [
              {
                id: "u101",
                fullName: "Dvir Rabbani",
                imgUrl:
                  "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
              },
              {
                id: "u102",
                fullName: "Yuval Mor",
                imgUrl:
                  "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
              },
              {
                id: "u103",
                fullName: "Tal Amit",
                imgUrl:
                  "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
              },
            ],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: {
              bgColor: "#4bce97",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t107",
            title: "Create project timeline",
            description: "with milestones and deadlines",
            comments: [
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  id: "u103",
                  fullName: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
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
            members: [
              {
                id: "u101",
                fullName: "Dvir Rabbani",
                imgUrl:
                  "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
              },
              {
                id: "u102",
                fullName: "Yuval Mor",
                imgUrl:
                  "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
              },
              {
                id: "u103",
                fullName: "Tal Amit",
                imgUrl:
                  "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
              },
            ],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: {
              bgColor: "rgb(137,193,190)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717169138/zcw8hqjfj793o3y1ehen.gif",
              isCoverFull: false,
            },
          },
          {
            id: "t108",
            title: "Create project timeline",
            description: "with milestones and deadlines",
            comments: [
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  id: "u103",
                  fullName: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
            ],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: {
              bgColor: "rgb(189,186,182)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717169431/azbqq53oskw7nlhnd1ck.webp",
              isCoverFull: true,
            },
          },
          {
            id: "t109",
            title: "Create project timeline",
            description: "with milestones and deadlines",
            comments: [
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  id: "u103",
                  fullName: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
            ],
            checklists: [],
            attachments: [],
            members: [
              {
                id: "u101",
                fullName: "Dvir Rabbani",
                imgUrl:
                  "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
              },
              {
                id: "u102",
                fullName: "Yuval Mor",
                imgUrl:
                  "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
              },
            ],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: null,
          },
          {
            id: "t110",
            title: "Create project timeline",
            description: "with milestones and deadlines",
            comments: [
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  id: "u103",
                  fullName: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
            ],
            checklists: [],
            attachments: [],
            members: [
              {
                id: "u101",
                fullName: "Dvir Rabbani",
                imgUrl:
                  "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
              },
            ],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: null,
            archivedAt: 1716666184963,
          },
        ],
      },
      {
        id: "g102",
        title: "Design",
        archivedAt: 1710340183596,
        tasks: [
          {
            id: "t1ssign",
            title: "Assign project tasks",
            description:
              "Project tasks should be assigned to team members based on their skills and availability.",
            comments: [
              {
                id: "ZdPnm",
                txt: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  id: "u101",
                  fullName: "Tal Tarablus",
                  imgUrl:
                    "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                },
              },
              {
                id: "AbCde",
                txt: "@Dvir, great work on this! Would you mind addressing the edge case mentioned in line 54?",
                createdAt: 1591002317436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  id: "u103",
                  fullName: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
            ],
            checklists: [
              {
                id: "checkliffst1",
                title: "Daily Tasks",
                todos: [
                  {
                    id: "todo1g",
                    title: "Complete morning workout",
                    isDone: true,
                  },
                  {
                    id: "todo2t",
                    title: "Prepare breakfast",
                    isDone: true,
                  },
                  {
                    id: "todo3y",
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
            members: [],
            labelIds: ["l106", "l107", "l108", "l109", "l1010", "l1011"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: {
              bgColor: "#9f8fef",
              bgImg: null,
              isCoverFull: false,
            },
          },
          {
            id: "t1efine",
            title: "Define project scope",
            description:
              "scenarios, use cases, features, and functions that characterize a project's value.",
            comments: [
              {
                id: "ZdPnm",
                txt: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  id: "u101",
                  fullName: "Tal Tarablus",
                  imgUrl:
                    "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                },
              },
            ],
            checklists: [
              {
                id: "chec4klist1",
                title: "Project Scope Tasks",
                todos: [
                  {
                    id: "todo1h",
                    title: "Identify project requirements",
                    isDone: false,
                  },
                  {
                    id: "todo2y",
                    title: "Define project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3u",
                    title: "Identify project deliverables",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checklis5t2",
                title: "Scope Verification Tasks",
                todos: [
                  {
                    id: "todo1j",
                    title: "Verify project scope",
                    isDone: false,
                  },
                  {
                    id: "todo2u",
                    title: "Confirm project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3i",
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
            members: [],
            labelIds: ["l1010", "l107", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: null,
          },
        ],
      },
      {
        id: "g103",
        title: "Development",
        archivedAt: null,
        tasks: [
          {
            id: "t1cope",
            title: "Define project scope",
            description:
              "scenarios, use cases, features, and functions that characterize a project's value.",
            comments: [],
            checklists: [
              {
                id: "chec2klist1",
                title: "Project Scope Tasks",
                todos: [
                  {
                    id: "todo1k",
                    title: "Identify project requirements",
                    isDone: false,
                  },
                  {
                    id: "todo2i",
                    title: "Define project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3o",
                    title: "Identify project deliverables",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checkl4ist2",
                title: "Scope Verification Tasks",
                todos: [
                  {
                    id: "todo1l",
                    title: "Verify project scope",
                    isDone: false,
                  },
                  {
                    id: "todo2o",
                    title: "Confirm project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3p",
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
            members: [],
            labelIds: ["l107", "l109", "l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: null,
          },
        ],
      },
      {
        id: "g104",
        title: "Testing",
        archivedAt: null,
        tasks: [
          {
            id: "t1uld",
            title: "Assign project tasks",
            description:
              "Project tasks should be assigned to team members based on their skills and availability.",
            comments: [
              {
                id: "ZdPnm",
                txt: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  id: "u101",
                  fullName: "Tal Tarablus",
                  imgUrl:
                    "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
            ],
            checklists: [
              {
                id: "checqklist1",
                title: "Daily Tasks",
                todos: [
                  {
                    id: "todo1z",
                    title: "Complete morning workout",
                    isDone: true,
                  },
                  {
                    id: "todo2p",
                    title: "Prepare breakfast",
                    isDone: true,
                  },
                  {
                    id: "todo3a",
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
            members: [],
            labelIds: ["l106", "l107", "l108", "l109", "l1010", "l1011"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: null,
          },
          {
            id: "t10featu",
            title: "Define project scope",
            description:
              "scenarios, use cases, features, and functions that characterize a project's value.",
            comments: [],
            checklists: [
              {
                id: "checklistu1",
                title: "Project Scope Tasks",
                todos: [
                  {
                    id: "todo1x",
                    title: "Identify project requirements",
                    isDone: false,
                  },
                  {
                    id: "todo2a",
                    title: "Define project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3s",
                    title: "Identify project deliverables",
                    isDone: false,
                  },
                ],
              },
              {
                id: "checkl3ist2",
                title: "Scope Verification Tasks",
                todos: [
                  {
                    id: "todo1c",
                    title: "Verify project scope",
                    isDone: false,
                  },
                  {
                    id: "todo2s",
                    title: "Confirm project boundaries",
                    isDone: false,
                  },
                  {
                    id: "todo3d",
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
            members: [],
            labelIds: ["l106", "l107", "l108"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: null,
          },
          {
            id: "t1time",
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
            members: [],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: null,
          },
        ],
      },
      {
        id: "g105",
        title: "Deployment",
        archivedAt: 1710340183596,
        tasks: [
          {
            id: "t9ask",
            title: "Assign project tasks",
            description:
              "Project tasks should be assigned to team members based on their skills and availability.",
            comments: [
              {
                id: "ZdPnm",
                txt: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  id: "u101",
                  fullName: "Tal Tarablus",
                  imgUrl:
                    "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                },
              },
              {
                id: "AbCde",
                txt: "@Dvir, great work on this! Would you mind addressing the edge case mentioned in line 54?",
                createdAt: 1591002317436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
            ],
            checklists: [
              {
                id: "checkltyist1",
                title: "Daily Tasks",
                todos: [
                  {
                    id: "todo1v",
                    title: "Complete morning workout",
                    isDone: true,
                  },
                  {
                    id: "todo2d",
                    title: "Prepare breakfast",
                    isDone: true,
                  },
                  {
                    id: "todo3f",
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
            members: [],
            labelIds: ["l106", "l107", "l108", "l109", "l1010", "l1011"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: null,
          },
          {
            id: "t14timeline",
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
            members: [],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u103",
              fullName: "Tal Amit",
              imgUrl:
                "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
            },
            style: null,
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
          id: "u101",
          fullName: "Dvir Rabbani",
          imgUrl:
            "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
        },
      },
      {
        id: "a102",
        txt: "Dvir Rabbani add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591002317436,
        byMember: {
          id: "u101",
          fullName: "Dvir Rabbani",
          imgUrl:
            "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
        },
      },
      {
        id: "a103",
        txt: "Yuval Mor add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591003217436,
        byMember: {
          id: "u102",
          fullName: "Yuval Mor",
          imgUrl:
            "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
        },
      },
      {
        id: "a104",
        txt: "Tal Amit add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591004117436,
        byMember: {
          id: "u103",
          fullName: "Tal Amit",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
        },
      },
    ],
  },
  {
    _id: "b102",
    title: "Vacation Planning",
    isStarred: false,
    archivedAt: null,
    createdBy: {
      id: "u102",
      fullName: "Yuval Mor",
      imgUrl:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
    },
    style: {
      bgImg:
        "https://res.cloudinary.com/dp0y6hy2o/image/upload/v1686384787/a7c521b94eb153008f2d_ex0umg.svg",
      colorRgb: "168, 103, 192",
      themeColor: "light",
    },
    labels: [
      { id: "l106", bgColor: "#4bce97", title: "To Do", name: "Green" },
      { id: "l107", bgColor: "#e2b203", title: "In Progress", name: "Gold" },
      { id: "l108", bgColor: "#faa53d", title: "Review", name: "Orange" },
      { id: "l109", bgColor: "#f87462", title: "Completed", name: "Coral" },
      { id: "l1010", bgColor: "#9f8fef", title: "Blocked", name: "Purple" },
      { id: "l1011", bgColor: "#1f845a", title: "On Hold", name: "Dark Green" },
      {
        id: "l1012",
        bgColor: "#946f00",
        title: "Cancelled",
        name: "Dark Gold",
      },
    ],
    members: [
      {
        id: "u101",
        fullName: "Dvir Rabbani",
        imgUrl:
          "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
      },
      {
        id: "u102",
        fullName: "Yuval Mor",
        imgUrl:
          "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
      },
      {
        id: "u103",
        fullName: "Tal Amit",
        imgUrl:
          "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
      },
    ],
    groups: [
      {
        id: "g501",
        title: "Flights",
        archivedAt: null,
        tasks: [
          {
            id: "t1Book",
            title: "Book flight tickets",
            description:
              "Book flight tickets to destination and back. Make sure to choose the best seats.",
            comments: [],
            checklists: [
              {
                id: "checklistyu1",
                title: "Flight Booking Tasks",
                todos: [
                  {
                    id: "todo1b",
                    title: "Search for flights",
                    isDone: true,
                  },
                  {
                    id: "todo2f",
                    title: "Choose best seats",
                    isDone: false,
                  },
                  {
                    id: "todo3g",
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
            members: [],
            labelIds: ["l106", "l107"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: null,
          },
          {
            id: "t1hotel",
            title: "Book hotel",
            description:
              "Book a hotel room for the duration of the vacation. Make sure to choose a hotel with good reviews.",
            comments: [],
            checklists: [
              {
                id: "chec54klist1",
                title: "Hotel Booking Tasks",
                todos: [
                  {
                    id: "todo1n",
                    title: "Search for hotels",
                    isDone: true,
                  },
                  {
                    id: "todo2g",
                    title: "Choose best hotel",
                    isDone: false,
                  },
                  {
                    id: "todo3h",
                    title: "Book room",
                    isDone: false,
                  },
                ],
              },
              {
                id: "chertcklist2",
                title: "Hotel Room Tasks",
                todos: [
                  {
                    id: "todof1m",
                    title: "Check in",
                    isDone: false,
                  },
                  {
                    id: "todo2h",
                    title: "Check out",
                    isDone: false,
                  },
                  {
                    id: "todo3j",
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
            members: [],
            labelIds: ["l106"],
            dueDate: { date: 1712602448965, isCompleted: true },
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: null,
          },
        ],
      },
      {
        id: "g502",
        title: "Family",
        archivedAt: 1710340183596,
        tasks: [
          {
            id: "t1gif",
            title: "Buy gifts",
            description:
              "Buy gifts for family members. Make sure to choose the best gifts.",
            comments: [
              {
                id: "ZdPnm",
                txt: "also @yaronb please CR this",
                createdAt: 1590999817436,
                byMember: {
                  id: "u101",
                  fullName: "Tal Tarablus",
                  imgUrl:
                    "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                },
              },
              {
                id: "AbCde",
                txt: "@Dvir, great work on this! Would you mind addressing the edge case mentioned in line 54?",
                createdAt: 1591002317436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
              {
                id: "FgHij",
                txt: "This code looks good to me. Nice job, @Tal!",
                createdAt: 1591003217436,
                byMember: {
                  id: "u103",
                  fullName: "Tal Amit",
                  imgUrl:
                    "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
                },
              },
              {
                id: "KlMno",
                txt: "I agree with @Yuval's suggestion. It's important to handle that edge case properly. @Dvir, could you take a look?",
                createdAt: 1591004117436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
            ],
            checklists: [
              {
                id: "checklt6ist1",
                title: "Gift Buying Tasks",
                todos: [
                  {
                    id: "todo1m",
                    title: "Search for gifts",
                    isDone: true,
                  },
                  {
                    id: "todo2j",
                    title: "Choose best gifts",
                    isDone: false,
                  },
                  {
                    id: "todo3q",
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
            members: [],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u101",
              fullName: "Dvir Rabbani",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
            },
            style: {
              bgColor: "#4bce97",
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
          id: "u101",
          fullName: "Dvir Rabbani",
          imgUrl:
            "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
        },
      },
      {
        id: "a103",
        txt: "Yuval Mor add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591003217436,
        byMember: {
          id: "u102",
          fullName: "Yuval Mor",
          imgUrl:
            "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
        },
      },
      {
        id: "a104",
        txt: "Tal Amit add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591004117436,
        byMember: {
          id: "u103",
          fullName: "Tal Amit",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
        },
      },
    ],
  },
  {
    _id: "b103",
    title: "Trip to Rome",
    isStarred: true,
    archivedAt: null,
    createdBy: {
      id: "u102",
      fullName: "Yuval Mor",
      imgUrl:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
    },
    style: {
      bgImg:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717432086/photo-1552832230-c0197dd311b5_ttpojh.webp",
      colorRgb: "86,127,149",
      themeColor: "light",
    },
    labels: [
      { id: "l106", bgColor: "#4bce97", title: "Done", name: "Green" },
      {
        id: "l107",
        bgColor: "#e2b203",
        title: "About GetYourGuide",
        name: "Gold",
      },
      {
        id: "l108",
        bgColor: "#faa53d",
        title: "History & heritage",
        name: "Orange",
      },
      { id: "l109", bgColor: "#f87462", title: "To do", name: "Coral" },
      {
        id: "l1010",
        bgColor: "#9f8fef",
        title: "Art & museums",
        name: "Purple",
      },
      {
        id: "l1016",
        bgColor: "#cce0ff",
        title: "Culinary & nightlife",
        name: "Light Blue",
      },
      {
        id: "l1027",
        bgColor: "#1d7f8c",
        title: "Sightseeing tour",
        name: "Teal",
      },
    ],
    members: [
      {
        id: "u101",
        fullName: "Dvir Rabbani",
        imgUrl:
          "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
      },
      {
        id: "u102",
        fullName: "Yuval Mor",
        imgUrl:
          "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
      },
    ],
    groups: [
      {
        id: "g50901",
        title: "Good to know 📌",
        archivedAt: null,
        tasks: [
          {
            id: "t1B33ook",
            title: "Currency: Euro (€)",
            description: "",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "#4bce97",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t1B33Languagalian",
            title: "Language: Italian",
            description: "",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "#9f8fef",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t1B33LCou9",
            title: "Country code: +39",
            description: "",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "#4bce97",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t1B33LCffou9",
            title: "Time zone: UTC (+01:00)",
            description: "",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: [],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "#9f8fef",
              bgImg: null,
              isCoverFull: true,
            },
          },
          {
            id: "t1B33Lnestfou9",
            title: "This is all the labels in the board",
            description: "",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: [
              "l106",
              "l107",
              "l108",
              "l109",
              "l1010",
              "l1016",
              "l1027",
            ],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
        ],
      },
      {
        id: "g5fdfgyt02",
        title: "Before the trip ✅",
        archivedAt: null,
        tasks: [
          {
            id: "t1ertgbb",
            title: "Book flights",
            description: "",
            comments: [
              {
                id: "ZdPnm",
                txt: "which airline are you flying with?",
                createdAt: 1590999817436,
                byMember: {
                  id: "u102",
                  fullName: "Yuval Mor",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
                },
              },
              {
                id: "KlMno",
                txt: "I fly with Alitalia",
                createdAt: 1591004117436,
                byMember: {
                  id: "u101",
                  fullName: "Dvir Rabbani",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
                },
              },
            ],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l106"],
            dueDate: { date: 1717275600000, isCompleted: false },
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tdhejnka22`,
            title: "Book accommodation",
            description: "look for a hotel in the center of Rome",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l106"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tdhejnka2322`,
            title: "Book transfer from airport",
            description:
              "look transfer from airport to hotel that have enough space for all the luggage",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l106"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tdhePackuitcases22`,
            title: "Packing",
            description:
              "This is the size of the suitcase you can take with you on the plane: 55 x 40 x 20 cm and a backpack of 40 x 30 x 10 cm. Make sure to pack accordingly.",
            comments: [],
            checklists: [
              {
                id: "checklist1for4523",
                title: "Pack suitcases",
                todos: [
                  {
                    id: "tesrtwodo1",
                    title: "Clothes",
                    isDone: false,
                  },
                  {
                    id: "teweodo2",
                    title: "Shoes",
                    isDone: false,
                  },
                  {
                    id: "wertodo3",
                    title: "Swimsuit",
                    isDone: false,
                  },
                  {
                    id: "qewrtodo4",
                    title: "Sweatshirt",
                    isDone: false,
                  },
                  {
                    id: "qwertofdo5",
                    title: "Underwear and socks",
                    isDone: false,
                  },
                ],
              },
              {
                id: "chebacjfor4523",
                title: "Pack backpack",
                todos: [
                  {
                    id: "tertwoodo1",
                    title: "Passport",
                    isDone: false,
                  },
                  {
                    id: "teweofedo2",
                    title: "Money",
                    isDone: false,
                  },
                  {
                    id: "wertodfo3",
                    title: "Phone",
                    isDone: false,
                  },
                  {
                    id: "qewrftodo4",
                    title: "Charger",
                    isDone: false,
                  },
                  {
                    id: "qwertodo5",
                    title: "Headphones",
                    isDone: false,
                  },
                ],
              },
            ],
            attachments: [],
            members: [],
            labelIds: ["l109"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tdhejcheckin2`,
            title: "Check-in online",
            description: "Check-in online to save time at the airport.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l109"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tdhesdeckin2`,
            title: "Read about Rome in the travel guide",
            description:
              "This is the link to the travel guide: https://www.lonelyplanet.com/italy/rome",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l109"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tdhesdeckin32esd2`,
            title: "Check the weather",
            description: "Check the weather in Rome before you pack.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l109"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tdhesdeckin32es334gh`,
            title: "Plan your itinerary",
            description:
              "Plan your itinerary in Rome. Make sure to include all the places you want to visit.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l109"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
        ],
      },
      {
        id: "g5fdfgyt02buyflidt",
        title: "Rome bucket list 🗺️",
        archivedAt: null,
        tasks: [
          {
            id: `tromeBuvketlist1`,
            title: "Visit the Colosseum",
            description:
              "The Colosseum is the largest amphitheater ever built. It is one of the greatest works of Roman architecture and engineering.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l108"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tromeBuvketlist2`,
            title: "Throw a coin in the Trevi Fountain",
            description:
              "According to legend, throwing a coin into the Trevi Fountain ensures a return trip to Rome.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l108"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tromeBuvketlist3`,
            title: "Visit the Vatican Museums",
            description:
              "The Vatican Museums are Christian and art museums located within Vatican City.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l1010"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tromeBuvketlist4`,
            title: "Visit the Sistine Chapel",
            description:
              "The Sistine Chapel is a chapel in the Apostolic Palace, the official residence of the pope, in Vatican City.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l1010"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tromeBuvketlist5`,
            title: "Visit the Pantheon",
            description:
              "The Pantheon is a former Roman temple, now a church, in Rome, Italy, on the site of an earlier temple commissioned by Marcus Agrippa during the reign of Augustus.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l108"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tromeBuvketlist6`,
            title: "Explore St. Peter's Basilica",
            description:
              "The Papal Basilica of Saint Peter in the Vatican, or simply Saint Peter's Basilica, is a church built in the Renaissance style located in Vatican City, the papal enclave that is within the city of Rome.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l108"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tromeBuvketlist7`,
            title: "Visit the Roman Forum",
            description:
              "The Roman Forum, also known by its Latin name Forum Romanum, is a rectangular forum surrounded by the ruins of several important ancient government buildings at the center of the city of Rome.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l108"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
          {
            id: `tromeBuvketlist8`,
            title: "Visit the Spanish Steps",
            description:
              "The Spanish Steps are a set of steps in Rome, Italy, climbing a steep slope between the Piazza di Spagna at the base and Piazza Trinità dei Monti, dominated by the Trinità dei Monti church at the top.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l108"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
        ],
      },
      {
        id: "g5fdfgyt02bufirstDauy",
        title: "First Day in Rome 🌞🇮🇹",
        archivedAt: null,
        tasks: [
          {
            id: `tromeBuvketlgotyothr1`,
            title:
              "10:00 AM — First thing's first: the Colosseum. Channel your inner gladiator with exclusive access to hidden areas.",
            description:
              "The Colosseum is the largest amphitheater ever built. It is one of the greatest works of Roman architecture and engineering.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l108"],
            dueDate: { date: 1718744400000, isCompleted: false },
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "rgb(130, 114, 102)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717436812/rome1_fmfpwi.png",
              isCoverFull: false,
            },
          },
          {
            id: `tromeBuvketlgotyothr2`,
            title:
              "2:00 PM — See the city in style: on a segway. You'll cruise past the Roma Forum, Palatine Hill, and more.",
            description:
              "The Roman Forum, also known by its Latin name Forum Romanum, is a rectangular forum surrounded by the ruins of several important ancient government buildings at the center of the city of Rome.",
            comments: [
              {
                id: "ZdPnm",
                txt: "I'm so excited for this!",
                createdAt: 1590999817436,
                byMember: {
                  id: "u101",
                  fullName: "Dvir Rabbani",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
                },
              },
            ],
            checklists: [
              {
                id: "checklist1stus",
                title: "Segway Tour",
                todos: [
                  {
                    id: "todod1m",
                    title: "Roma Forum",
                    isDone: true,
                  },
                  {
                    id: "todddo2j",
                    title: "Palatine Hill",
                    isDone: false,
                  },
                  {
                    id: "todod3q",
                    title: "Circus Maximus",
                    isDone: false,
                  },
                ],
              },
            ],
            attachments: [],
            members: [],
            labelIds: ["l1027"],
            dueDate: { date: 1718744400000, isCompleted: false },
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "rgb(79, 79, 66)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717436811/rome3_ftyjwy.png",
              isCoverFull: false,
            },
          },
          {
            id: `tromeBuvketlgotyothr3`,
            title:
              "5:00 PM — When in Rome, eat as the Romans do! Taste the best of the city on a local food tour.",
            description:
              "we will taste the best of the city on a local food tour.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l1016"],
            dueDate: { date: 1718744400000, isCompleted: false },
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: null,
          },
        ],
      },
      {
        id: "g5fdfgyt02budecondtDauy",
        title: "Second Day in Rome 🌞🇮🇹",
        archivedAt: null,
        tasks: [
          {
            id: "tromeBuvketlgotyotfdhr2",
            title:
              "10:00 AM — Breeze past the crowds with a skip-the-line ticket to the vatican and Sistine Chapel. Hallelujah!",
            description:
              "The Vatican Museums are Christian and art museums located within Vatican City.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l1010"],
            dueDate: { date: 1718830800000, isCompleted: false },
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "rgb(182, 146, 107)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717436812/romere_xsrrfa.png",
              isCoverFull: false,
            },
          },
          {
            id: `tromedeconfDayr1`,
            title:
              "3:00 PM — Discover a hidden treasure trove of art history at the Borghese Gallery (with minimal crowds).",
            description:
              "The Borghese Gallery is an art gallery in Rome, Italy, housed in the former Villa Borghese Pinciana.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l1010"],
            dueDate: { date: 1718830800000, isCompleted: false },
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "rgb(164, 130, 91)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717436812/romree_fcuona.png",
              isCoverFull: false,
            },
          },
          {
            id: `tromedeconfDayr4`,
            title:
              "7:00 PM — Soak up the arias (and the vino) at an open-air concert at Terrazza Borromini. The perfect end to a perfect weekend.",
            description:
              "The Terrazza Borromini is a rooftop restaurant located in the heart of Rome.",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l1016"],
            dueDate: { date: 1718830800000, isCompleted: false },
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "rgb(203, 226, 239)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717436811/Screen_Shot_2019-10-25_at_14.33.31_vo8uui.png",
              isCoverFull: false,
            },
          },
        ],
      },
      {
        id: "g5fdfgyt02buThirdtDauy",
        title: "About GetYourGuide 🎫",
        archivedAt: null,
        tasks: [
          {
            id: `tromedmuGuidDayr1`,
            title:
              "Discover thousands of unique and unmissable things to do around the world with GetYourGuide.",
            description: "",
            comments: [],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l107"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "rgb(255, 255, 255)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717436811/romree4_s3x9vh.png",
              isCoverFull: false,
            },
          },
          {
            id: `tromedmuGuidDayr2`,
            title: "WhatsApp chat: +49 151 23457858",
            description: "You can contact us via WhatsApp chat or by phone.",
            comments: [
              {
                id: "ZdPnm",
                txt: "I talked to them and they are very nice, they helped me a lot",
                createdAt: 1590999817436,
                byMember: {
                  id: "u101",
                  fullName: "Dvir Rabbani",
                  imgUrl:
                    "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
                },
              },
            ],
            checklists: [],
            attachments: [],
            members: [],
            labelIds: ["l107"],
            dueDate: null,
            byMember: {
              id: "u102",
              fullName: "Yuval Mor",
              imgUrl:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
            },
            style: {
              bgColor: "rgb(255, 255, 255)",
              bgImg:
                "https://res.cloudinary.com/df0eaacho/image/upload/v1717436810/GetYourGuide-WhatsApp-customer-service_xjzdwn.png",
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
          id: "u101",
          fullName: "Dvir Rabbani",
          imgUrl:
            "https://res.cloudinary.com/df0eaacho/image/upload/v1717324592/170_p9gfyl.png",
        },
      },
      {
        id: "a103",
        txt: "Yuval Mor add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591003217436,
        byMember: {
          id: "u102",
          fullName: "Yuval Mor",
          imgUrl:
            "https://res.cloudinary.com/df0eaacho/image/upload/v1717325026/170_a6m1oi.png",
        },
      },
      {
        id: "a104",
        txt: "Tal Amit add new Task Apr 12 2024 at 12:12 PM",
        createdAt: 1591004117436,
        byMember: {
          id: "u103",
          fullName: "Tal Amit",
          imgUrl:
            "https://trello-members.s3.amazonaws.com/623214502cc0530dcce588e3/3e1849faf09890be34d57bf5131c6afe/170.png",
        },
      },
    ],
  },
]
