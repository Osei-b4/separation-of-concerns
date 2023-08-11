

import { changeColorHandler } from "../handlers/change-color.js";

export const inputListener = (inputEl) => {
    inputEl.addEventListener('change', changeColorHandler);
}