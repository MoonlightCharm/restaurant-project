import "./styles.css";
import { showHome } from './home.js';
import { showContact } from "./contact.js";

showHome();

const homeButton = document.querySelector('.home-button');
homeButton.classList.add('active');
const contactButton = document.querySelector('.contact-button');
const content = document.querySelector('#content');

homeButton.addEventListener('click', () => {
    contactButton.classList.remove('active')
    homeButton.classList.add('active');
    content.innerHTML = '';
    showHome();
});

contactButton.addEventListener('click', () => {
    homeButton.classList.remove('active');
    contactButton.classList.add('active');
    content.innerHTML = '';
    showContact();
});