function handleKeyPress(event) {
  if (event.keyCode === 13) {
    var input = document.getElementById("textInput");

    var textContainer = document.getElementById("textContainer");

    if (input.value.startsWith("/1")) {
      var h1 = document.createElement("h1");

      h1.innerText = input.value.slice(2);

      textContainer.appendChild(h1);
    } else {
      var p = document.createElement("p");

      p.innerText = input.value;

      textContainer.appendChild(p);
    }

    input.value = "";
  }
}
