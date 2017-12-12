import './style.css';

function component() {
  var element = document.createElement('h1');

  element.innerHTML = 'Hello world';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());