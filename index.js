const electron = require('electron') 
  
// Importing the clipboard Module 
const clipboard = electron.clipboard; 

function finish() {

    const text = document.querySelector(".ql-editor").innerHTML;
    clipboard.writeText(text);
    alert("Copied!");
  }
  