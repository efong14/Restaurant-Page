import moon from '../img/moon.png'

const content = document.getElementById('content');
const img = document.createElement('img');
const header = document.createElement('header');
const menuContainer = document.createElement('div');
const item1 = document.createElement('div');
const item2 = document.createElement('div');
const item3 = document.createElement('div');
const item4 = document.createElement('div');


function menu() {
    img.src = moon;

    header.textContent = 'Menu';
    item1.textContent= 'Coffee - $2.00';
    item2.textContent= 'Cake Slice - $5.00';
    item3.textContent= 'Pasta - $6.50';
    item4.textContent= 'Sandwich - $7.25';

    menuContainer.classList.add('menuContainer');
    item1.classList.add('item1');
    item2.classList.add('item2');
    item3.classList.add('item3');
    item4.classList.add('item4');

    content.appendChild(img);
    content.appendChild(header);
    content.appendChild(menuContainer);
    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);
};

export default menu;

