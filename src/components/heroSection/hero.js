import heroBannerImg from "../../banner.svg"
import { createImg } from "../../shared/functions"

export function createHeroSection() {
    const heroContainer = document.createElement('div')
    heroContainer.classList.add('hero-container')

    heroContainer.appendChild(createHeroBanner())
    heroContainer.appendChild(createHeroQuoteContainer())

    return heroContainer
}

function createHeroBanner() {
    return createImg(heroBannerImg, "Potato Parlour Banner", "hero-container_banner")
}

function createHeroQuoteContainer() {
    const heroQuoteContainer = document.createElement('div')
    const quoteText = "I'll take a potato chip and eat it"
    heroQuoteContainer.classList.add("hero-qutation-container")


    heroQuoteContainer.appendChild(createHeroQuote(quoteText))
    heroQuoteContainer.appendChild(createHeroCite('-Kira'))

    return heroQuoteContainer
}

function createHeroQuote(text) {
    const quote = document.createElement('q')
    quote.classList.add('hero-qutation-container_quote')
    quote.textContent = text
    return quote
}

function createHeroCite(text) {
    const cite = document.createElement('h3')
    cite.classList.add("hero-qutation-container_cite")
    cite.textContent = text
    return cite
}