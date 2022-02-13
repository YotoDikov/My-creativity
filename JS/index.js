const buttonsSections = document.querySelectorAll("[data-link]");
// console.log(buttonsSections);

let currentSelection;

for (const item of buttonsSections) {
  item.dataset.link;
  console.log(item.dataset.link);

  if (item.dataset.link === "about") {
    console.log("ABOUT");
  }

  item.addEventListener("click", function (e) {
    e.preventDefault();

    if (currentSelection) {
      currentSelection.classList.remove("active");
    }
    currentSelection = e.target.parentNode;
    currentSelection.classList.add("active");
  });
}
