import {inputTypeHandler} from "../handlers/input.js"


export const inputlistener = (input) =>
   input.addEventlistener('type', inputTypeHandler);