import { inputListener } from "../listeners/input-linstener.js";

// this file is the program's Entry Point
debugger;


const wrapper = document.getElementById('user-interface');
const inputEl = document.getElementById('new-color');

wrapper.style.backgroundColor = inputEl.value;

inputListener(inputEl);