// this file is the program's Entry Point
debugger;
import { SECRET_HOLDER, SECRET } from "../data./constant.js";
import { hoverlistener } from "../listeners/listener.js";
import { changeElementColor } from "./utils.js";

//SET STARTUP SCREEN 
const secretHolder = document.createElement(SECRET_HOLDER).innerTEXT = 'secret';
secretHolder.innerText = SECRET;
changeElementColor(secretHolder, "transparent");     


// listenring to hovering 

hoverlistener(secretHolder);