// snippets.js with syntax highlighting + export feature + search

const snippets = {
  html: {
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <pre><code class="language-javascript">const x = 10;</code></pre>

  <title>Document</title>
</head>
<body>

</body>
</html>`,

    form: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>`,

    table: `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>`,

    image: `<img src="image.jpg" alt="A sample image" width="300">`,

    link: `<a href="https://example.com">Visit Example</a>`,

    video: `<video controls>
  <source src="movie.mp4" type="video/mp4">
</video>`,

    list: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`,

    semantic: `<section>
  <h2>About Us</h2>
  <p>This is a semantic section.</p>
</section>`,

    meta: `<meta name="description" content="Free code snippets">`,

    comment: `<!-- This is an HTML comment -->`,

    iframe: `<iframe src="https://example.com" width="300" height="200"></iframe>`,

    audio: `<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
</audio>`
  },

  css: {
    reset: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,

    center: `.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`,

    gradient: `body {
  background: linear-gradient(to right, #00c6ff, #0072ff);
}`,

    hover: `button:hover {
  background-color: green;
}`,

    media: `@media (max-width: 600px) {
  body {
    background: lightgray;
  }
}`,

    animation: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,

    shadow: `.card {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`,

    transition: `.btn {
  transition: background 0.3s ease;
}`,

    customProp: `:root {
  --main-color: #333;
}`,

    comment: `/* This is a CSS comment */`,

    flexbox: `.container {
  display: flex;
  gap: 10px;
}`,

    grid: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`
  },

  javascript: {
    alert: `alert('Hello, world!');`,

    function: `function greet(name) {
  return `Hello, ${name}`;
}`,

    fetch: `fetch('https://api.example.com')
  .then(res => res.json())
  .then(data => console.log(data));`,

    loop: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,

    condition: `if (user.isLoggedIn) {
  showDashboard();
}`,

    array: `const items = ['a', 'b', 'c'];
items.forEach(item => console.log(item));`,

    object: `const person = {
  name: 'Alice',
  age: 25
};`,

    event: `document.querySelector('button').addEventListener('click', () => alert('Clicked!'));`,

    class: `class Animal {
  constructor(name) {
    this.name = name;
  }
}`,

    comment: `// This is a JavaScript comment`,

    import: `import { useState } from 'react';`,

    export: `export function add(x, y) {
  return x + y;
}`
  },

  python: {
    print: `print("Hello, World!")`,

    function: `def greet(name):
    return f"Hello, {name}"`,

    loop: `for i in range(5):
    print(i)` ,

    condition: `if x > 0:
    print("Positive")` ,

    list: `fruits = ['apple', 'banana', 'cherry']` ,

    dict: `person = {"name": "John", "age": 30}` ,

    classDef: `class Dog:
    def __init__(self, name):
        self.name = name` ,

    import: `import math` ,

    exception: `try:
    x = 1 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")` ,

    comment: `# This is a Python comment` ,

    lambdaFunc: `square = lambda x: x * x` ,

    listComp: `squares = [x*x for x in range(10)]`
  }
};

// Function to export snippet as a downloadable file
function exportSnippet(code, language) {
  const blob = new Blob([code], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `snippet.${language}`;
  a.click();
  URL.revokeObjectURL(url);
}

// Search functionality
function searchSnippets(term) {
  const lowerTerm = term.toLowerCase();
  const results = {};
  for (const [lang, snippetsByLang] of Object.entries(snippets)) {
    results[lang] = {};
    for (const [key, code] of Object.entries(snippetsByLang)) {
      if (key.toLowerCase().includes(lowerTerm) || code.toLowerCase().includes(lowerTerm)) {
        results[lang][key] = code;
      }
    }
    if (Object.keys(results[lang]).length === 0) {
      delete results[lang];
    }
  }
  return results;
}

// Syntax highlighting is assumed to be handled by Prism.js or Highlight.js in the HTML
