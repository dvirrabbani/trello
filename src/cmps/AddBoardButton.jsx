import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Popover } from "./Popover"
import { Button } from "./Button"
import { useForm } from "../customHooks/useForm"
import { addBoard } from "../store/board.actions"
import { DEMO_USER } from "../demo/user"
import SvgIcon from "./SvgIcon"
import { uiService } from "../services/ui.service"

export function AddBoardButton({ iconName, title, variant, className }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()
  const [fields, setFields, handleChange, resetForm] = useForm({
    title: "",
    bgImg:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/dbcdcd797bbbabb501ababeb0c947f2c/photo-1496769336828-c522a3a7e33c.jpg",
    colorRgb: "103,143,67",
    themeColor: "light",
  })
  const bgSvgList = [
    {
      bgImg:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717168551/micn2lc4tvc6ataxwcme.svg",
      colorRgb: "32,139,211",
      themeColor: "light",
    },
    {
      bgImg:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717168335/yer4i01erod1gpcvqmff.svg",
      colorRgb: "168,103,192",
      themeColor: "light",
    },
    {
      bgImg:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717168551/micn2lc4tvc6ataxwcme.svg",
      colorRgb: "32,139,211",
      themeColor: "light",
    },
    {
      bgImg:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717168335/yer4i01erod1gpcvqmff.svg",
      colorRgb: "32,139,211",
      themeColor: "light",
    },
    {
      bgImg:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717168551/micn2lc4tvc6ataxwcme.svg",
      colorRgb: "32,139,211",
      themeColor: "light",
    },
    {
      bgImg:
        "https://res.cloudinary.com/df0eaacho/image/upload/v1717168335/yer4i01erod1gpcvqmff.svg",
      colorRgb: "32,139,211",
      themeColor: "light",
    },
  ]
  const bgImgList = [
    {
      bgImg:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/dbcdcd797bbbabb501ababeb0c947f2c/photo-1496769336828-c522a3a7e33c.jpg",
      colorRgb: "103,143,67",
      themeColor: "light",
    },
    {
      bgImg:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1152/9c05f34757e34207525e730c4b827391/photo-1497436072909-60f360e1d4b1.jpg",
      colorRgb: "53,124,121",
      themeColor: "light",
    },
    {
      bgImg:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/dbcdcd797bbbabb501ababeb0c947f2c/photo-1496769336828-c522a3a7e33c.jpg",
      colorRgb: "103,143,67",
      themeColor: "light",
    },
    {
      bgImg:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1152/9c05f34757e34207525e730c4b827391/photo-1497436072909-60f360e1d4b1.jpg",
      colorRgb: "53,124,121",
      themeColor: "light",
    },
  ]

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  async function onAddBoard() {
    setAnchorEl(null)
    // TODO get logged in user
    const boardToAdd = {
      title: fields.title,
      style: {
        bgImg: fields.bgImg,
        colorRgb: fields.colorRgb,
        themeColor: fields.themeColor,
      },
      members: [DEMO_USER],
      groups: [],
      labels: uiService.getDefaultBoardLabels(),
      activities: [],
      isStarred: false,
      archivedAt: null,
      createdBy: DEMO_USER,
    }
    const savedBoard = await addBoard(boardToAdd)
    navigate(`/board/${savedBoard._id}`)
    resetForm()
  }

  function onChangeBackgroundColor(bg) {
    setFields((prevFields) => ({
      ...prevFields,
      bgImg: bg.bgImg,
      colorRgb: bg.colorRgb,
      themeColor: bg.themeColor,
    }))
  }

  const isPopoverOpen = Boolean(anchorEl)
  const popoverId = isPopoverOpen ? "add-board-popover-id" : undefined

  return (
    <article
      className={`${
        className ? `add-board-button ${className}` : "add-board-button"
      }`}
    >
      <Button variant={variant} onClick={handleClick}>
        {iconName && <SvgIcon iconName={iconName} />}
        {title && <span>{title}</span>}
      </Button>
      <Popover
        id={popoverId}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        title={"Create board"}
      >
        <div className="add-board-popover-content">
          <section className="preview-container">
            <article
              className="preview  bg-image-cover"
              style={{ backgroundImage: `url(${fields.bgImg})` }}
            >
              <img
                src={"https://trello.com/assets/14cda5dc635d1f13bc48.svg"}
                alt=""
              />
            </article>
          </section>
          <section className="board-background-list">
            <label className="label">Background</label>
            <ul className="bg-img-list clean-list">
              {bgImgList.map((bg, i) => {
                return (
                  <button
                    key={i}
                    className="button bg-image-cover"
                    onClick={() => onChangeBackgroundColor(bg)}
                    style={{
                      backgroundImage: `url(${bg.bgImg})`,
                    }}
                  ></button>
                )
              })}
            </ul>
            <ul className="bg-svg-list clean-list">
              {bgSvgList.map((bg, i) => {
                return (
                  <button
                    key={i}
                    className="button"
                    onClick={() => onChangeBackgroundColor(bg)}
                    style={{
                      backgroundImage: `url(${bg.bgImg})`,
                    }}
                  ></button>
                )
              })}
            </ul>
          </section>
          <label htmlFor="add-board-title" className="label">
            Board title
          </label>
          <input
            id="add-board-title"
            name="title"
            type="text"
            className="input-text"
            onChange={handleChange}
          />
          <Button
            disabled={!fields.title.length}
            variant="contained"
            onClick={onAddBoard}
          >
            Create
          </Button>
        </div>
      </Popover>
    </article>
  )
}
