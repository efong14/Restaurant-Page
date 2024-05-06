import initialLoad from "./initial-load";
import menu from "./menu";
import contact from "./contact";
import './style.css';

document.querySelectorAll('button').forEach((btn) => btn.onclick = () => document.getElementById('content').textContent = '')
document.getElementById('home').addEventListener('click', initialLoad);
document.getElementById('menu').addEventListener('click', menu);
document.getElementById('contact').addEventListener('click', contact);

initialLoad();
console.log('Works!');