import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const MainScripts = () => {

console.clear();

Splitting({
  target: ".ui-heading",
  by: "chars"
});

const elMenu = document.querySelector(".ui-menu");
const elButton = document.querySelector(".ui-button");

elButton.addEventListener("click", () => {
  elMenu.classList.toggle("-visible");
  elButton.classList.toggle("-open");
});

const elArticles = document.querySelectorAll("article.ui-layer");
const articleCount = elArticles.length;
let currentPage = 0;

function navigate(nextPage) {
  nextPage = ((nextPage % articleCount) + articleCount) % articleCount;

  if (nextPage === currentPage) {
    return;
  }

  currentPage = nextPage;

  document
    .querySelectorAll(`.-current`)
    .forEach((el) => el.classList.remove("-current"));

  document
    .querySelectorAll(
      `article:nth-child(${currentPage + 1}), .ui-image:nth-child(${
        currentPage + 1
      })`
    )
    .forEach((el) => el.classList.add("-current"));
}

document.querySelector(".ui-nav-back").addEventListener("click", (e) => {
  navigate(currentPage - 1);
});

document.querySelector(".ui-nav-forward").addEventListener("click", (e) => {
  navigate(currentPage + 1);
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowDown":
    case "ArrowRight":
      navigate(currentPage + 1);
      break;
    case "ArrowUp":
    case "ArrowLeft":
      navigate(currentPage - 1);
      break;
    default:
      break;
  }
});

}

// elMenu.addEventListener('click', () => {
//   elMenu.classList.toggle('-visible');
// });


export default MainScripts
