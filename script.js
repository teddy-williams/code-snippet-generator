function generateSnippet() {
  const language = document.getElementById("language").value;
  const type = document.getElementById("snippet-type").value;
  const output = document.getElementById("output");

  const snippet = snippets[language]?.[type] || "// Snippet not found.";

  output.className = `language-${language}`;
  output.textContent = snippet;
  Prism.highlightElement(output);
}

function copyToClipboard() {
  const output = document.getElementById("output");
  navigator.clipboard.writeText(output.textContent).then(() => {
    alert("Snippet copied to clipboard!");
  });
}
