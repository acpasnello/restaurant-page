import "./styles.css";
import { pageLoad } from "./page-load.js"
import { displayMenu } from "./menu.js";

let contentDiv = document.getElementById('content')
let homeButton = document.getElementById('home')
let menuButton = document.getElementById('menu')
let aboutButton = document.getElementById('about')

document.addEventListener('DOMContentLoaded', function(){
    pageLoad()

    homeButton.addEventListener('click', function() {
        contentDiv.innerHTML = ''
    })

    menuButton.addEventListener('click', function() {
        contentDiv.innerHTML = ''
        displayMenu()
    })

    aboutButton.addEventListener('click', function() {
        contentDiv.innerHTML = ''
    })
})