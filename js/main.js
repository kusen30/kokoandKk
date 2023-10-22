const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const gridCollapsibles = document.querySelectorAll(".grid__body--items");
gridCollapsibles.forEach((item) =>
  item.addEventListener("click", function() {
      this.classList.toggle("grid__collapsible");
  })
);

const articleCollapsible = document.querySelectorAll(".article--context");
articleCollapsible.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("article__expanded");
  })
);