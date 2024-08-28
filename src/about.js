export function aboutPage() {
    let parent = document.getElementById('content')

    let pageTitle = document.createElement('h1')
    pageTitle.innerText = 'About Us'

    let aboutText = document.createElement('p')
    aboutText.innerText = 'Tony\'s Ristorante is a family owned neighborhood watering hole.'
    
    let aboutButton = document.getElementById('about')
    aboutButton.classList.add('active')
    parent.append(pageTitle, aboutText)
}