import { createFooter } from "../../components/footer/footer"
import { createHeader } from "../../components/header/header"
import { createHeroSection } from "../../components/heroSection/hero"
import { createTestimonial } from "../../components/testimonialSection/testimonial"

export function renderHomePage() {
    const body = document.querySelector("body")
    body.innerHTML = ''
    const main = document.createElement('main')

    main.appendChild(createHeroSection())
    main.appendChild(createTestimonial())

    body.appendChild(createHeader())
    body.appendChild(main)
    body.appendChild(createFooter())
}

