const verify = document.getElementById("verificar");
verify.addEventListener("click", function () {
  let valor1 = document.querySelector("#primero").value;
  let valor2 = document.querySelector("#segundo").value;
  let valor3 = document.querySelector("#tercero").value;
  let password = valor1 + valor2 + valor3;
  if (password == "911") {
    mensaje.innerHTML = "Password 1 correcto";
  } else if (password == "714") {
    mensaje.innerHTML = "Password 2 correcto";
  } else {
    mensaje.innerHTML = "Password incorrecto";
  }
});
