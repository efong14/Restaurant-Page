const content = document.getElementById('content');
const img = document.createElement('img');
const header = document.createElement('header');
const gridContainer = document.createElement('div');
const item1 = document.createElement('div');
const item2 = document.createElement('div');
const item3 = document.createElement('div');
const item4 = document.createElement('div');

function menu() {
    img.src = "../img/moon.png";

    header.textContent = 'Menu';
    item1.textContent= 'Coffee - $2.00';
    item2.textContent= 'Cake Slice - $5.00';
    item3.textContent= 'Pasta - $6.50';
    item4.textContent= 'Sandwhich - $7.25';

    gridContainer.classList.add('gridContainer');
    item1.classList.add('item1');
    item2.classList.add('item2');
    item3.classList.add('item3');
    item4.classList.add('item4');

    content.appendChild(img);
    content.appendChild(header);
    content.appendChild(gridContainer);
    gridContainer.appendChild(item1);
    gridContainer.appendChild(item2);
    gridContainer.appendChild(item3);
    gridContainer.appendChild(item4);
};

export default menu

