import { uiService } from "../../../services/ui.service"

export function ChangeBoardBg({ type, setMenuContent }) {
  const colorsBgUrl =
    "https://res.cloudinary.com/df0eaacho/image/upload/v1717878971/97db30fe74a58b7b7a18_ah8ljq.png"
  const imgBgUrl =
    "https://res.cloudinary.com/df0eaacho/image/upload/v1717878972/8f9c1323c9c16601a9a4_y4kqes.jpg"
  const bgOptionsUrl =
    type === "bg-color" ? uiService.getBoardBgSvg() : uiService.getBoardBgImg()

  function onClickBgGroup(title, type) {
    setMenuContent({ title, type })
  }

  return type === "background" ? (
    <div>
      <div>
        <BgOption
          imgUrl={imgBgUrl}
          title={"Photos"}
          onClick={() => onClickBgGroup("Photos", "bg-photo")}
        />
        <BgOption
          imgUrl={colorsBgUrl}
          title={"Colors"}
          onClick={() => onClickBgGroup("Colors", "bg-color")}
        />
      </div>
      <div className="divider"></div>
      <h3>Custom background</h3>
      <div>+</div>
    </div>
  ) : (
    <div className="bg-option-list">
      {bgOptionsUrl.map((bgOptionUrl, index) => (
        <BgOption
          key={index}
          imgUrl={bgOptionUrl.bgImg}
          emoji={bgOptionUrl.emoji}
        />
      ))}
    </div>
  )
}

function BgOption({ imgUrl, onClick, title, emoji }) {
  return (
    <div className="bg-option" onClick={onClick}>
      <div className="img-bg">
        <img src={imgUrl} alt="background" />
        {emoji && <span className="emoji">{emoji}</span>}
      </div>
      {title && <div className="title">{title}</div>}
    </div>
  )
}
