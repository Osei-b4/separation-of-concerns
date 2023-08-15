import {  turnBlack, turnTransparent } from "../handlers/handler.js";
import {OUT_EVENT, OVER_EVENT } from "../data/constant.js"; 

export const hoverListener = (element) => {
      element.addEventlistener(OVER_EVENT, turnBlack);
      element.addEventlistener(OUT_EVENT, turnTransparent);
};