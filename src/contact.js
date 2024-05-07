import moon from '../img/moon.png';

const content = document.getElementById('content');
const img = document.createElement('img');
const header = document.createElement('header');
const contactContainer = document.createElement('div');
const item1 = document.createElement('div');
const item2 = document.createElement('div');
const item3 = document.createElement('div');


function contact() {
    img.src = moon;

    header.textContent = 'Contact';
    item1.textContent= 'Mobile - 0987-555-6622';
    item2.textContent= 'Landline - 01-1234-5678';
    item3.textContent= 'Address - 123 Luna Street, Moon City, The Moon';

    contactContainer.classList.add('contactContainer');
    item1.classList.add('mobile');
    item2.classList.add('landline');
    item3.classList.add('address');

    content.appendChild(img);
    content.appendChild(header);
    content.appendChild(contactContainer);
    contactContainer.appendChild(item1);
    contactContainer.appendChild(item2);
    contactContainer.appendChild(item3);
};

export default contact;