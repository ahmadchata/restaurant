import '../stylesheets/style.css';
import loadInitial from './initialLoad';


const title = "Rest or Rant";
const slogan = "You either eat and rest or don't eat and continue ranting";

const content = document.querySelector('#content');

content.appendChild(loadInitial(title, slogan));
