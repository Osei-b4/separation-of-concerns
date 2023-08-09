// this file is the program's Entry Point
debugger;

const inputEL = document.getElementById('new-color');

input.addEventListener('change', (e) => {
    const wrapper = document.getElementById('user-interface');
    wrapper.style.background = e.target.value;
});