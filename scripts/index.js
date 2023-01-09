const pricesItems = document.querySelector('.prices__items');
const pricesItem = document.querySelector('prices__item');
const basics = document.querySelector('#basics');
const standart = document.querySelector('#standart');
const proCare = document.querySelector('#proCare');
const template = document.querySelector('#template').content;
const templatePrice = template.querySelector('.template__price');
const contacts = document.querySelector('.contacts');
const contactsList = document.querySelector('.contacts__list');
const contactsCities = document.querySelector('.contacts__cities');
const Canandaigua = document.querySelector('#Canandaigua');
const NewYorkCity = document.querySelector('#NewYorkCity');
const Yonkers = document.querySelector('#Yonkers');
const Sherrill = document.querySelector('#Sherrill');
const contactsText = document.querySelector('.contacts__text');
const contactsImage = document.querySelector('.contacts__image');
const serviceButtonGardens = document.querySelector('.service__button-gardens')
const serviceButtonLawn = document.querySelector('.service__button-lawn')
const serviceButtonPlanting = document.querySelector('.service__button-planting')
const serviceCardOrange = document.querySelector('.service__card-orange')
const garden = document.querySelectorAll('.garden')
const planting = document.querySelectorAll('.planting')
const lawn = document.querySelectorAll('.lawn')

serviceButtonGardens.addEventListener('click', () => {
    for (let i = 0; i < planting.length; i++) {
        planting[i].classList.toggle('blure')
    }
    for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.toggle('blure')
    }
    serviceButtonGardens.classList.toggle('service__card-orange')
})

serviceButtonLawn.addEventListener('click', () => {
    for (let i = 0; i < garden.length; i++) {
        garden[i].classList.toggle('blure')
    }
    for (let i = 0; i < planting.length; i++) {
        planting[i].classList.toggle('blure')
    }
    serviceButtonLawn.classList.toggle('service__card-orange')
})

serviceButtonPlanting.addEventListener('click', () => {
    for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.toggle('blure')
    }
    for (let i = 0; i < garden.length; i++) {
        garden[i].classList.toggle('blure')
    }
    serviceButtonPlanting.classList.toggle('service__card-orange')
})

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

const address = [
    { city: 'Canandaigua, NY', phone: '+1 585 393 0001', office: '151 Charlotte Street' },
    { city: 'New York City', phone: '+1 212 456 0002', office: '9 East 91st Street' },
    { city: 'Yonkers, NY', phone: '+1 914 678 0003', office: '511 Warburton Ave' },
    { city: 'Sherrill, NY', phone: '+1 315 908 0004', office: '14 WEST Noyes BLVD' }
]

standart.addEventListener('click', () => addPrice(openPrices(prices[0].rate, prices[0].span, prices[0].subtitle, prices[0].coast)))
basics.addEventListener('click', () => addPrice(openPrices(prices[1].rate, prices[1].span, prices[1].subtitle, prices[1].coast)))
proCare.addEventListener('click', () => addPrice(openPrices(prices[2].rate, prices[1].span, prices[2].subtitle, prices[2].coast)))

function openPrices(rate, span, subtitle, coast) {
    let newCard = template.querySelector('.template__price').cloneNode(true);
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
    pricesItems.classList.toggle('prices__items-noBorder')
    // prices__items-noBorder
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

contactsList.addEventListener('click', () => (contactsCities.classList.toggle('contacts__cities-active'), contactsList.classList.toggle('contacts__list-active'), contactsImage.classList.toggle('hidden')));

function editAdres(object) {
    contactsText.textContent = object.city;
    contactsCities.classList.toggle('contacts__cities-active');
}

function addAdressFieled(object) {
    let newCard = template.querySelector('.template__contact').cloneNode(true);
    newCard.querySelector('#city').textContent = object.city;
    newCard.querySelector('#phone').textContent = object.phone;
    newCard.querySelector('#office').textContent = object.office;
    editAdres(object)
    return newCard;
};

function addCard(card) {
    contacts.append(card);
    const templateContact = contacts.querySelector('#contactUs')
    contactsList.addEventListener('click', () => templateContact.remove(), contactsImage.classList.toggle('hidden'))
}

Canandaigua.addEventListener('click', () => addCard(addAdressFieled(address[0])));
NewYorkCity.addEventListener('click', () => addCard(addAdressFieled(address[1])));
Yonkers.addEventListener('click', () => addCard(addAdressFieled(address[2])));
Sherrill.addEventListener('click', () => addCard(addAdressFieled(address[3])));