export function createHeader() {
    const header = document.createElement('header')
    header.appendChild(createNav())
    return header
}

function createNav() {
    const nav = document.createElement('nav')
    nav.appendChild(createNavLogoHeading("Potato Parlour"))
    const buttonTextArray = ['Home', 'Menu', 'Locations']
    nav.appendChild(createNavButtonContainer(buttonTextArray))
    return nav
}

function createNavLogoHeading(text) {
    const logoHeading = document.createElement('h1')
    logoHeading.textContent = text
    logoHeading.classList.add('text-shadow')
    return logoHeading
}

function createNavButtonContainer(buttonTextArray) {
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('nav-button-container')
    for (const text of buttonTextArray) {
        buttonContainer.appendChild(createNavButton(text))
    }

    return buttonContainer
}

function createNavButton(text) {
    const button = document.createElement('button')
    button.classList.add('text-shadow')
    button.textContent = text
    return button
}