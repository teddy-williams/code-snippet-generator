const snippets = {
  button: `<button class="btn">Click Me</button>`,
  form: `<form>\n  <input type="text" placeholder="Your name" />\n  <button type="submit">Submit</button>\n</form>`,
  modal: `<div class="modal">\n  <p>This is a modal!</p>\n  <button>Close</button>\n</div>`
};

function generate() {
  const type = document.getElementById('snippet-type').value;
  const output = document.getElementById('output');
  output.value = snippets[type] || 'Snippet not found.';
}

function copyToClipboard() {
  const output = document.getElementById('output');
  output.select();
  document.execCommand("copy");
  alert("Snippet copied to clipboard! ✅");
}
