import SNIPS from './snippet-data.js';

// console.log(SNIPS);

const renderSnips = snippets => {
  const snippetsHTML = snippets
    .map(
      snippet => /* html */ ` 
  <div class="snip">
    <div class="text">
      <h2>${snippet.title}</h2>
      <p>${snippet.description}</p>
    </div>
    <pre><code class="${snippet.language}">${he.encode(
        snippet.code
      )}</code></pre>
  </div>`
    )
    .join('');
  console.log(snippetsHTML);
  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetsHTML;
};

renderSnips(SNIPS);

hljs.initHighlightingOnLoad();
