import "../styles/style.css";

const DOMSelectors = {
  display: document.querySelector(".cards"),
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

document.querySelector(".cost").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
});
document.querySelector(".legality").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
});
document.querySelector(".limited").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
});
