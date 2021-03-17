import '../stylesheets/style.css';
import loadInitial from './initialLoad';
import background from '../assets/background.jpeg';


const title = "Rest or Rant";
const slogan = "Eat and rest or don't eat and continue ranting";

const content = document.querySelector('#content');
const body = document.querySelector('body');


content.appendChild(loadInitial(title, slogan));


