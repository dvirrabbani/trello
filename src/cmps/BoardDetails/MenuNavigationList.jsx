import { useSelector } from "react-redux"
import SvgIcon from "../SvgIcon"

export function MenuNavigationList({ menuList, setMenuContent }) {
  const getBoardBgImg = useSelector(
    (state) => state.boardModule.board.style.bgImg
  )

  function displayMenuIcon(icon) {
    if (icon && icon !== "background") return <SvgIcon iconName={icon} />
    if (icon === "background")
      return (
        <div className="menu-icon-bg">
          <img src={getBoardBgImg} alt="" />
        </div>
      )
  }
  return (
    <div className="menu-navigation-list">
      {menuList.map((menuItem, idx) => (
        <div
          key={idx}
          className="menu-item flex align-center"
          onClick={() => setMenuContent(menuItem)}
        >
          {menuItem.icon && displayMenuIcon(menuItem.icon)}
          {menuItem.title}
        </div>
      ))}
    </div>
  )
}
