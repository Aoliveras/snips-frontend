const snippets = document.getElementById('snippets');

// console.log(snippets);

// snippets.style.backgroundColor = '#ff5600';

// const h2 = snippets.querySelector('h2');

// h2.style.fontSize = '100px';

// console.log(snippets.innerHTML);

// setTimeout(() => {
//   snippets.innerHTML = '<p>Welcome to the snippets page!</p>';
// }, 3000);

setInterval(() => {
  const button = document.createElement('button');
  button.innerText = 'PLEASE!!!';
  button.addEventListener('click', survey);
  document.body.append(button);
}, 2000);

function survey() {
  prompt('How are you enjoying your time?');
  // sends response to server
}

function aggressiveButton(button) {
  button.innerText = 'HEY DO IT NOW!!!';
}
