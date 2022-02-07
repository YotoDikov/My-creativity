const buttonsSections = document.getElementsByClassName("link");

let currentSelection;

for (const item of buttonsSections) {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    if (currentSelection) {
      currentSelection.classList.remove("active");
    }
    currentSelection = e.target.parentNode;
    currentSelection.classList.add("active");
  });
}
