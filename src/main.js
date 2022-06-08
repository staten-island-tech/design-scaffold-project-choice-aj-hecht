import "../styles/style.css";

const DOMSelectors = {
  display: document.querySelector("buttons"),
};

document.querySelector(".theme").addEventListener("click", function () {
  if (document.body.classList.contains("warm")) {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  } else {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  }
});
