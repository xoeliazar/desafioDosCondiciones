let button = document.querySelector("#btn2");
let verificar = document.querySelector("#btn");
let texto = document.querySelector("#texto");

verificar.addEventListener("click", function () {
  let cantidad1 = parseInt(document.getElementById("input1").value);
  let cantidad2 = parseInt(document.getElementById("input2").value);
  let cantidad3 = parseInt(document.getElementById("input3").value);
  let sumar = cantidad1 + cantidad2 + cantidad3;
  if (sumar > 10) {
    texto.innerHTML = "llevas demasiados stickers";
  } else if (sumar <= 10) {
    texto.innerHTML = "llevas" + " " + sumar + " " + "stickers";
  }

  button.addEventListener("click", function () {
    window.location.href = "index3.html";
  });
});
