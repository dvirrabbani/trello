export function MenuNavigationList({ menuList, setMenuContent }) {
  return (
    <div className="menu-navigation-list">
      {menuList.map((menuItem, idx) => (
        <div
          key={idx}
          className="menu-item"
          onClick={() => setMenuContent(menuItem)}
        >
          {menuItem.title}
        </div>
      ))}
    </div>
  )
}
