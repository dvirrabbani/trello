import { uiService } from "../../../services/ui.service"
import { updateCurrentBoard } from "../../../store/board.actions"
import { BtnImgUploader } from "../../btn/BtnImgUpload"

export function ChangeBoardBg({ type, setMenuContent }) {
  const colorsBgUrl =
    "https://res.cloudinary.com/df0eaacho/image/upload/v1717878971/97db30fe74a58b7b7a18_ah8ljq.png"
  const imgBgUrl =
    "https://res.cloudinary.com/df0eaacho/image/upload/v1717878972/8f9c1323c9c16601a9a4_y4kqes.jpg"
  const bgOptions =
    type === "bg-color" ? uiService.getBoardBgSvg() : uiService.getBoardBgImg()

  function onClickBgGroup(title, type) {
    setMenuContent({ title, type })
  }

  function onClickBg(bgOption) {
    updateCurrentBoard(null, null, { key: "style", value: bgOption })
  }

  async function onUpdateCustomBg(bgImg) {
    const colorRgb = await uiService.getDominantColor(bgImg)
    const themeColor = uiService.isRgbBright(colorRgb) ? "dark" : "light"
    const boardStyleToUpdate = { bgImg, colorRgb, themeColor }
    updateCurrentBoard(null, null, { key: "style", value: boardStyleToUpdate })
  }

  return type === "background" ? (
    <div className="change-board-bg">
      <div className="flex justify-between">
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
      <div className="custom-bg-section">
        <h3>Custom background</h3>
        <div>
          <BtnImgUploader onUploaded={onUpdateCustomBg} />
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-option-list">
      {bgOptions.map((bgOption, index) => (
        <BgOption
          key={index}
          imgUrl={bgOption.bgImg}
          emoji={bgOption.emoji}
          onClick={() => onClickBg(bgOption)}
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
