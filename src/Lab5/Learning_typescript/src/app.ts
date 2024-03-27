const loginForm=document.getElementById("login") ;
const h1= document.createElement("h1")
h1.textContent="Login"
const lable= document.createElement("label")
lable.textContent="Username: "
const input= document.createElement("input")
const button= document.createElement("button")
button.textContent="Start"

loginForm?.appendChild(h1)
loginForm?.appendChild(lable);
loginForm?.appendChild(input);
loginForm?.appendChild(button);