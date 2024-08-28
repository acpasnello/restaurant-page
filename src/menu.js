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
            <td>Shoestring Fries</td><td>5</td>
            <td>Roasted Brussels</td><td>7</td>
        </tr>
        <tr>
            <td>Mom's Mac & Cheese</td><td>6</td>
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
            <td>Chicken & Mushroom Quesadilla</td><td>11</td>
        </tr>
        <tr>
            <td>Chicken Parm Sandwich</td><td>12</td>
            <td>Italian Sub</td><td>11</td>
        </tr>
        <tr>
            <td>Shepherd's Pie</td><td>10</td>
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
            <td>Modelo Especial</td><td>4</td>
            <td>Sauvignon Blanc</td><td>7</td>
        </tr>
        <tr>
            <td>Allagash White</td><td>6</td>
            <td>Malbec</td><td>7</td>
        </tr>
        <tr>
            <td>New Trail Broken Heels IPA</td><td>6</td>
            <td>House White</td><td>6</td>
        </tr>
        <tr>
            <td>New Trail Lazy River Pils</td><td>6</td>
            <td>House Red</td><td>6</td>
        </tr>
        <tr>
            <td>Squish</td><td>6</td>
            <th colspan="2">Hydration</th>
        </tr>
        <tr>
            <td>Guiness</td><td>5</td>
            <td>Topo Chico</td><td>3</td>
        </tr>
        <tr>
            <td>Ranier</td><td>5</td>
            <td>Raspberry Iced Tea</td><td>3</td>
        </tr>
        <tr>
            <td>Eleventh Hour Sour</td><td>7</td>
            <td>San Pellegrino</td><td>3</td>
        </tr>
    </table>`

    let menuButton = document.getElementById('menu')
    menuButton.classList.add('active')
    let menuComponents = [pageTitle, startersDiv, mainsDiv, bevsDiv]
    for (let i = 0; i < menuComponents.length; i++) {
        parent.appendChild(menuComponents[i])
    }
}