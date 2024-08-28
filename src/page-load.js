import insidePic from "./IMG_2025.jpg"

export function pageLoad () {
    let parentDiv = document.getElementById("content")

    let title = document.createElement("h1")
    title.textContent = "Tony's Ristorante"

    let info = document.createElement('p')
    info.textContent = "Family style dining with farm fresh ingredients, every day."
    
    let pic = document.createElement('img')
    pic.src = insidePic

    let children = [title, info, pic]

    for (let i = 0; i < children.length; i++) {
        parentDiv.appendChild(children[i])
    }
}