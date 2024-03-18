export function createImg(src = "", alt = "", classList = "") {
    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    img.classList = classList
    return img
}

export function createH1(text) {
    const h1 = document.createElement('h1')
    h1.textContent = text
    return h1
}

export function createH3(text) {
    const h3 = document.createElement('h3')
    h3.textContent = text
    return h3
}