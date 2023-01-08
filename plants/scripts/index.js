const pricesItems = document.querySelector('.prices__items');
const pricesItem = document.querySelector('prices__item')
const basics = document.querySelector('#basics')
const standart = document.querySelector('#standart')
const proCare = document.querySelector('#proCare')
const template = document.querySelector('#template').content;
const templatePrice = template.querySelector('.template__price')
const contactsList = document.querySelector('.contacts__list')
const contactsCities = document.querySelector('.contacts__cities')

const prices = [
    {
        rate: 'Standard',
        subtitle: 'Release of Letraset sheets containing Lorem Ipsum passages, and more recently',
        span: '$25 ',
        coast: '/ per hour'
    },
    {
        rate: 'Basics',
        subtitle: 'Release of Letraset sheets containing Lorem Ipsum passages, and more recently',
        span: '$15 ',
        coast: '/ per hour'
    },
    {
        rate: 'Pro care',
        subtitle: 'Release of Letraset sheets containing Lorem Ipsum passages, and more recently',
        span: '$35 ',
        coast: '/ per hour'
    }
]

standart.addEventListener('click', () => addPrice(openPrices(prices[0].rate,prices[0].span, prices[0].subtitle, prices[0].coast)))
basics.addEventListener('click', () => addPrice(openPrices(prices[1].rate,prices[1].span, prices[1].subtitle, prices[1].coast)))
proCare.addEventListener('click', () => addPrice(openPrices(prices[2].rate,prices[1].span, prices[2].subtitle, prices[2].coast)))

function openPrices(rate,span, subtitle, coast) {
    let newCard = template.cloneNode(true);
    newCard.querySelector('.template__text').textContent = rate;
    newCard.querySelector('.template__span').textContent = span;
    newCard.querySelector('.template__subtitle').textContent = subtitle;
    newCard.querySelector('.template__coast').textContent = coast;
    const templateHeading = newCard.querySelector('.template__heading')
    const templateOrder = newCard.querySelector('.template__order')
    templateOrder.addEventListener('click', () => displayAll())
    templateHeading.addEventListener('click', () => displayAll())
    return newCard;
}

function addPrice(price) {
    pricesItems.append(price)
    hideOther(basics, standart, proCare)
}

function hideOther(basics, standart, proCare) {
    basics.classList.add('prices__item-hide');
    standart.classList.add('prices__item-hide');
    proCare.classList.add('prices__item-hide');
}

function makeOrader(price) {
    pricesItems.pop(price)
    displayAll(basics, standart, proCare)
}

function displayAll() {
    basics.classList.remove('prices__item-hide'),
    standart.classList.remove('prices__item-hide'),
    proCare.classList.remove('prices__item-hide')
    pricesItems.children[3].remove()
}
// contacts__cities-active
contactsList.addEventListener('click', () => (contactsCities.classList.toggle('contacts__cities-active'), contactsList.classList.toggle('contacts__list-active')))