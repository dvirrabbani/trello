import React from "react"
import { svgService } from "../services/svg.service"

const SvgIcon = ({ iconName, className, size, onClick }) => {
  function getSvg(iconName) {
    return svgService.getSvg(iconName)
  }

  let dynamicClass = `svg-icon ${size ? `svg-icon-size-${size}` : ""}${className ? ` ${className}` : ""}`

  return <i onClick={onClick} className={dynamicClass} dangerouslySetInnerHTML={{ __html: getSvg(iconName) }}></i>
}

export default SvgIcon
