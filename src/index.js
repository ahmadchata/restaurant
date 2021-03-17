import '../stylesheets/style.css';
import loadInitial from './initialLoad';
import contacts from './contact';
import menu from './menu';
import background from '../assets/background.jpeg';


const title = "Rest or Rant";
const slogan = "Eat and rest or don't eat and continue ranting";

const content = document.querySelector('#content');
const body = document.querySelector('body');

const navBar = document.createElement('nav');

const navButton = (text) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  return btn;
};

navBar.appendChild(navButton('Home'));
navBar.appendChild(navButton('Contact'));
navBar.appendChild(navButton('Menu'));

content.appendChild(navBar);

const switchPage = () => {
 document.querySelectorAll('button').forEach((e) => {
  e.target.textContent;



 })
};

document.querySelectorAll('button').forEach((b) => {
  b.addEventListener('click', (e) => {
     switch (e.target.textContent) {
    case 'Home':
      content.appendChild(loadInitial(title, slogan));
      break;
    case 'Contact':
      content.appendChild(contacts());
      break;
    case 'Menu':
      content.appendChild(menu());
      break;
    default:
  }
  })
});


