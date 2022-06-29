const textInput = document.getElementById("editor");
const clearButton = document.getElementById("clear");

function saveText(e) {
  localStorage.setItem("text", e.target.value);
}

function clearText(e) {
  localStorage.removeItem("text");
  textInput.value = "";
}


window.onload = () => {
  textInput.value = localStorage.getItem("text");
};

textInput.addEventListener("keyup", saveText);
clearButton.addEventListener("click", clearText);