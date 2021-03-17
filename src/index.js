import '../stylesheets/style.css';

const content = document.querySelector('#content');
const create = () => {
  const p = document.createElement('p');
  p.textContent = 'Restaurant';
  p.classList.add('test');
  return p;
};

content.appendChild(create());
