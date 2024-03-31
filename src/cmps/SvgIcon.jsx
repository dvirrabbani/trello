import React from "react";
import { svgService } from "../services/svg.service";

const SvgIcon = ({ iconName }) => {
  function getSvg(iconName) {
    return svgService.getSvg(iconName);
  }

  return <i dangerouslySetInnerHTML={{ __html: getSvg(iconName) }}></i>;
};

export default SvgIcon;
