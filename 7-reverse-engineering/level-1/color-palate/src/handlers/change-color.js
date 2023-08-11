export const changeColorHandler = (e) => {
    const wrapper = document.getElementById('user-interface');
    wrapper.style.backgroundColor = e.target.value;
}