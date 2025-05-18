const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")
const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click',fecharMenu)

function abrirMenu(){
    body.classList.add("to-darken")
    nav.classList.add("open")
}

function fecharMenu(){
    body.classList.remove("to-darken")
    nav.classList.remove("open")
}