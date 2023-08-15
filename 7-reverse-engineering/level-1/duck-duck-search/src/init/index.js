//this file is the program's Entry Point
debugger;

const wrapper = document.getElementById("user-interface");
const  input  = document.createElement("INPUT");
input.setAttribute("type", "search");

wrapper.appendChild(input);

const btn = document.createElement('button');
wrapper.appendChild(btn);
btn.innerText = 'DuckDuckSearch';

input.classList.add("input-field");
input.setAttribute("id", "query");
btn.setAttribute("id", "search-button");
wrapper.classList.add("centered");
 
 //select the value of the input
 //open duckduckgo and search the text
 //https://duckduckgo.com/?q=+&ia=web
btn.addEventListener("click", () => { 
    const cEL = input.value 
    console.log(cEL);
    window.open("https://duckduckgo.com/?q="+ cEL);
});

//  const inputlistener = (input) => {
//    input.addEventlistener('type', inputTypeHandler);
//};

//    const inputTypeHandler = (e) => {
//  document.getElementById("user-interface");
//};
