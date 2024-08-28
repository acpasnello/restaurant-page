export function displayMenu() {
    let parent = document.getElementById('content')

    let pageTitle = document.createElement('h1')
    pageTitle.innerText = 'Menu'

    let startersDiv = document.createElement('div')
    startersDiv.classList.add('menuSection')
    startersDiv.innerHTML = 
    `<h2>Starters</h2>
    <table>
        <tr>
            <td>Shoestring Fries</td>
            <td>Roasted Brussels</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </table>`

    let mainsDiv = document.createElement('div')
    mainsDiv.classList.add('menuSection')
    mainsDiv.innerHTML = 
    `<h2>Mains</h2>
    <table>
        <tr>
            <td>House Burger</td><td>12</td>
            <td>Chef's Salad</td><td>10</td>
        </tr>
        <tr>
            <td>Carnitas Tacos</td><td>12</td>
            <td></td><td></td>
        </tr>
        <tr>
            <td>House Burger</td><td>12</td>
            <td>Chef's Salad</td><td>10</td>
        </tr>
    </table>`

    let bevsDiv = document.createElement('div')
    bevsDiv.classList.add('menuSection')
    bevsDiv.innerHTML = 
    `<h2>Beverages</h2>
    <table>
        <tr>
            <th colspan="2">Beer</th>
            <th colspan="2">Wine</th>
        </tr>
        <tr>
            <td>Modelo Especial</td><td>5</td>
            <td>Sauvignon Blanc</td><td>7</td>
        </tr>
        <tr>
            <td>Allagash White</td><td>6</td>
            <td>Malbec</td><td>7</td>
        </tr>
        <tr>
            <td>IPA Rotation</td><td>6</td>
            <td>House White</td><td>6</td>
        </tr>
        <tr>
            <td>Squish</td><td>6</td>
            <td>House Red</td><td>6</td>
        </tr>
    </table>`

    let menuComponents = [pageTitle, startersDiv, mainsDiv, bevsDiv]
    for (let i = 0; i < menuComponents.length; i++) {
        parent.appendChild(menuComponents[i])
    }
}