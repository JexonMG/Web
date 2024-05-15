var count = 0;
var titulo = document.getElementById("main-title").on;
var contador = document.getElementById("counter");

document.getElementById("surprise-button").onclick = function () {
  if (titulo.style.color === "red") {
    titulo.style.color = "black";
    titulo.style.backgroundColor = "red";
  } else {
    titulo.style.color = "red";
    titulo.style.backgroundColor = "black";
  }
  count++;
  contador.innerHTML = count;
};