import { createH1, createImg } from "../../shared/functions"
import borderTop from "../../border-top.svg"
import borderBottom from '../../border-bottom.svg'
import lightImg from '../../kira.png'
import imgOfL from '../../L.png'
import misaImg from '../../misa.png'

const cardData = [{
    name: '-Mr.Light Yagami',
    img: lightImg,
    quote: `"French fries are what truly matters. Indulging in such
    cuisine only serves to emphasize the pursuit of justice and the greater good."`
}, {
    name: '-Mr.L',
    img: imgOfL,
    quote: `"French fries, while a popular indulgence for many, hold extreme relevance to our current
    investigation. I beleive Kira indulges himself in such cuisine while killing his victims."`
},
{
    name: '-Ms.Misa Amane',
    img: misaImg,
    quote: `"Oh, french fries! They're so yummy and fun to eat, just like a happy little snack! I bet they'd go
    perfectly with a movie night with Light. He'd probably love them too! Anything to make him
    happy!"`
}]

export function createTestimonial() {
    const testimonialContainer = document.createElement('div')
    testimonialContainer.classList.add("testimonial-container")

    testimonialContainer.appendChild(createTestimonialContainerBorder(borderTop))
    testimonialContainer.appendChild(createH1("Testimonial"))
    createAndAppendTestimonialCards(testimonialContainer)
    testimonialContainer.appendChild(createTestimonialContainerBorder(borderBottom))

    return testimonialContainer
}

function createTestimonialContainerBorder(border) {
    return createImg(border, "", "testimonial-container_border-img")
}

function createAndAppendTestimonialCards(testimonialContainer) {
    for (const data of cardData) {
        testimonialContainer.appendChild(createTestimonialCard(data))
    }
}

function createTestimonialCard(data) {
    const testimonialCard = document.createElement('div')
    testimonialCard.classList.add('testimonial-card')

    testimonialCard.appendChild(createImg(data.img, data.name, 'testimonial-card_img'))
    testimonialCard.appendChild(createTestimonialCardQuote(data.quote))
    testimonialCard.appendChild(createTestimonialCardCite(data.name))

    return testimonialCard
}

function createTestimonialCardQuote(text) {
    const quote = document.createElement('blockquote')
    quote.classList.add('testimonial-card_quote')
    quote.textContent = text
    return quote
}

function createTestimonialCardCite(text) {
    const cite = document.createElement('h3')
    cite.classList.add('testimonial-card_name')
    cite.textContent = text
    return cite
}