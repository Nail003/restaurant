import "./styles.css"
import { reRenderHomePage, renderHomePage } from "./pages/home/home"
import { renderMenuPage } from "./pages/menu/menu"

renderHomePage()

const menuPageButton = document.getElementById('Menu-button')
const homePageButton = document.getElementById('Home-button')
menuPageButton.addEventListener('click', menuPageButtonHandler)
homePageButton.addEventListener('click', homePageButtonHandler)
setHomePageActive()


function menuPageButtonHandler() {
    setMenuPageActive()
    renderMenuPage()
}

function homePageButtonHandler() {
    setHomePageActive()
    reRenderHomePage()
}

function setHomePageActive() {
    homePageButton.classList.add('nav_button--active')
    menuPageButton.classList.remove('nav_button--active')
}

function setMenuPageActive() {
    menuPageButton.classList.add('nav_button--active')
    homePageButton.classList.remove('nav_button--active')
}