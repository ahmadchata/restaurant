const initialLoad = (title, slogan = '') => {
  const main = document.createElement('main');
  main.classList.add('main');

  const header = document.createElement('h1');
  header.classList.add('header');
  header.textContent = title;

  const description = document.createElement('span');
  description.classList.add('description');
  description.textContent = slogan;

  main.appendChild(header);
  main.appendChild(description);

  return main;
};

export default initialLoad;
