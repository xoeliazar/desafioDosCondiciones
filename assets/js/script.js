let img = document.querySelector("#img");
let button = document.querySelector("#btn");

img.addEventListener("click", function () {
  let border = img.style.border;
  if (border === "0px") {
    img.style.border = "2px solid red";
  } else {
    img.style.border = "0px";
  }
});

button.addEventListener("click", function () {
  window.location.href = "index2.html";
});
