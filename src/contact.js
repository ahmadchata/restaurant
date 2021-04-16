const contacts = () => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('new-div');

  const header = document.createElement('h1');
  header.classList.add('header');
  header.textContent = 'Contact us';

  const span = document.createElement('span');
  span.textContent = 'ahmadchata@gmail.com';

  newDiv.appendChild(header);
  newDiv.appendChild(span);

  return newDiv;
};

export default contacts;
