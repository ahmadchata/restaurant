const menu = () => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('new-div');

  const header = document.createElement('h1');
  header.classList.add('header');
  header.textContent = 'Menu';

  const span = document.createElement('span');
  span.textContent = 'Rice';

  newDiv.appendChild(header);
  newDiv.appendChild(span);

  return newDiv;
};

export default menu;
