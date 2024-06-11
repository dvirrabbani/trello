import { useEffect, useState } from "react"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { Menu } from "@mui/material"
import { MenuNavigationList } from "./MenuNavigationList"
import { DynamicBoardMenu } from "./DynamicBoardMenu/DynamicBoardMenu"

export function BoardMenu({ boardMenuIsOpen, onToggleBoardMenu }) {
  const menuList = [
    { title: "Activity", type: "activity", icon: "activities" },
    {
      title: "Change background",
      type: "background",
      icon: "background",
      children: [
        { title: "Color", type: "bg-color" },
        { title: "Photo", type: "bg-photo" },
      ],
    },
  ]
  const initialMenuContent = { title: "Menu", type: "menu-list" }
  const [menuContent, setMenuContent] = useState(initialMenuContent)

  useEffect(() => {
    if (boardMenuIsOpen) setMenuContent(initialMenuContent)
  }, [boardMenuIsOpen])

  return (
    <div className={`board-menu ${boardMenuIsOpen ? "open" : ""}`}>
      <header className="board-menu-header">
        {menuContent.type !== "menu-list" && (
          <Button
            className={"back-btn"}
            onClick={() => setMenuContent(initialMenuContent)}
          >
            <SvgIcon iconName="arrow" />
          </Button>
        )}
        <div className="title">{menuContent.title}</div>
        <Button className={"close-menu-btn"} onClick={onToggleBoardMenu}>
          <SvgIcon iconName="close" />
        </Button>

        <div className="divider"></div>
      </header>
      <div className="board-menu-content">
        {menuContent.type == "menu-list" ? (
          <MenuNavigationList
            menuList={menuList}
            setMenuContent={setMenuContent}
          />
        ) : (
          <DynamicBoardMenu
            type={menuContent.type}
            setMenuContent={setMenuContent}
          />
        )}
      </div>
    </div>
  )
}
