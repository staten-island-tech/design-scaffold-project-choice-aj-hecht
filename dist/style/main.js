import "../styles/style.css";

const DOMSelectors = {
  display: document.querySelector(".buttons"),
};

document.querySelector(".theme").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

document.querySelector(".home").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
});
document.querySelector(".blog").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
});
document.querySelector(".log in").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
});
