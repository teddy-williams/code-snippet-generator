const snippets = {
  html: {
    starter: "<!DOCTYPE html>\\n<html>\\n<head>\\n  <title>My Page</title>\\n</head>\\n<body>\\n\\n</body>\\n</html>",
    form: "<form>\\n  <input type='text' />\\n  <button>Submit</button>\\n</form>"
  },
  js: {
    function: "function greet(name) {\\n  return `Hello, ${name}!`;\\n}",
    loop: "for (let i = 0; i < 5; i++) {\\n  console.log(i);\\n}"
  },
  python: {
    function: "def greet(name):\\n    return f\\"Hello, {name}!\\"",
    loop: "for i in range(5):\\n    print(i)"
  },
  css: {
    starter: "body {\\n  background: #fff;\\n  font-family: Arial;\\n}",
    button: ".btn {\\n  background: blue;\\n  color: white;\\n}"
  },
  bash: {
    starter: "#!/bin/bash\\n\\necho \\"Hello, World!\\"",
    update: "sudo apt update && sudo apt upgrade -y"
  }
};
