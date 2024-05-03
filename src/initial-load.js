const content = document.getElementById('content');
const img = document.createElement('img');
const header = document.createElement('header');
const div = document.createElement('div');

function initialLoad() {
    img.src = "../img/moon.png";
    header.textContent = 'Moonside Cafe';
    div.textContent = 'Have a drink any time of the night at the Moonside cafe.';
    
    content.appendChild(img);
    content.appendChild(header);
    content.appendChild(div);
};

export default initialLoad

