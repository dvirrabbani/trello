import { useSelector } from "react-redux"
import SvgIcon from "../SvgIcon"
import { useNavigate, useParams } from "react-router"
import { removeBoard } from "../../store/board.actions"

export function MenuNavigationList({ menuList, setMenuContent }) {
  const getBoardBgImg = useSelector(
    (state) => state.boardModule.board.style.bgImg
  )
  const { boardId } = useParams()
  const navigate = useNavigate()

  function displayMenuIcon(icon) {
    if (icon && icon !== "background") return <SvgIcon iconName={icon} />
    if (icon === "background")
      return (
        <div className="menu-icon-bg">
          <img src={getBoardBgImg} alt="" />
        </div>
      )
  }

  function handleMenuItemClick(menuItem) {
    if (menuItem.type === "delete-board") {
      removeBoard(boardId)
      navigate("/board")
    } else {
      setMenuContent(menuItem)
    }
  }
  return (
    <div className="menu-navigation-list">
      {menuList.map((menuItem, idx) => (
        <div
          key={idx}
          className="menu-item flex align-center"
          onClick={() => handleMenuItemClick(menuItem)}
          // onClick={() => setMenuContent(menuItem)}
        >
          {menuItem.icon && displayMenuIcon(menuItem.icon)}
          {menuItem.title}
        </div>
      ))}
    </div>
  )
}
