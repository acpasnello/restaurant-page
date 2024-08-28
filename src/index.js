import "./styles.css";
import { pageLoad } from "./page-load.js"
import { displayMenu } from "./menu.js";
import { aboutPage } from "./about.js";

let contentDiv = document.getElementById('content')
let homeButton = document.getElementById('home')
let menuButton = document.getElementById('menu')
let aboutButton = document.getElementById('about')

document.addEventListener('DOMContentLoaded', function(){
    pageLoad()

    homeButton.addEventListener('click', function() {
        contentDiv.innerHTML = ''
        resetButtons()
        pageLoad()
    })

    menuButton.addEventListener('click', function() {
        contentDiv.innerHTML = ''
        resetButtons()
        displayMenu()
    })

    aboutButton.addEventListener('click', function() {
        contentDiv.innerHTML = ''
        resetButtons()
        aboutPage()
    })
})

function resetButtons() {
    homeButton.classList.remove('active')
    menuButton.classList.remove('active')
    aboutButton.classList.remove('active')
}