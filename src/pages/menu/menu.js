import { createH1, createH3, createImg } from "../../shared/functions"
import borderTop from '../../border-top.svg'
import borderBottom from '../../border-bottom.svg'
const itemList = [
    { name: 'French Fries', price: "35$" },
    { name: 'Waffle Fries', price: '20$' },
    { name: 'Curly Fries', price: '12$' },
    { name: 'Potato Wedges', price: '54$' },
    { name: 'Sweet Potato', price: '321$' },
    { name: 'Crinkle Cut', price: '90$' },
    { name: 'Potato Tornado', price: '214$' },
    { name: 'Chips', price: '32$' },
]


export function renderMenuPage() {
    const main = document.querySelector('main')
    main.innerHTML('')
    const menu = document.createElement('div')
    menu.classList.add('menu')

    menu.appendChild(createMenuBorder(borderTop))
    menu.appendChild(createMenuTitle('Potato Menu'))
    menu.appendChild(createMenuList(itemList))
    menu.appendChild(createMenuBorder(borderBottom))

    main.appendChild(menu)
}

function createMenuBorder(border) {
    return createImg(border, '', 'menu_border')
}

function createMenuTitle(text) {
    const title = createH1(text)
    title.classList.add('menu_title')
    return title
}

function createMenuList(itemList) {
    const menuList = document.createElement('div')
    menuList.classList.add('menu_list')

    for (const item of itemList) {
        menuList.appendChild(createMenuItem(item))
    }

    return menuList
}

function createMenuItem(item) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu_item')
    menuItem.appendChild(createH3(item.name))
    menuItem.appendChild(createH3(item.price))
    return menuItem
}