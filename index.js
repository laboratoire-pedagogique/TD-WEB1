const user = document.getElementById("user");
const loader = document.getElementById("loader");
const greeting = document.getElementById("greeting");
const box = document.getElementById("box");




function load(){
    hide(loader);
}

function hide(element) {
    element.classList.remove("block");
    element.classList.add("none");
}

function display(element) {
    element.classList.remove("none");
    element.classList.add("block");
}

function toggle(element) {
    display(element);
    setTimeout(() => {
        hide(element);
    },5000)
}

function defineText(element, value) {
    element.innerText = value;
}

//function hello() {
//    alert("Hello World");
//}

//setTimeout(hello, 5000);

function greet(element, value) {
    setTimeout(() => {
        defineText(element, value);
        display(element);
    },5000)
}

window.addEventListener("keydown",(e) => {
    if (e.key == "Enter") {
        const username = user.value;
        const text = "Hello " + username;
        //4) hide(user);
        //1) user.style.display = "none";
        //2) user.remove();
        //3) box.removeChild(user);
        toggle(loader)
        greet(greeting, text);
    }
})