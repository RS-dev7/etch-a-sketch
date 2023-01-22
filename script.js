let container = document.getElementById("container");

document.querySelector('input[name="create"]').addEventListener('click', (e) => {
  e.preventDefault();
  sizeOfGrid = document.getElementById("gridSize").value;
  container.style.gridTemplate = `repeat(${sizeOfGrid}, 1fr) / repeat(${sizeOfGrid}, 1fr)`;
  for (i = 0; i < sizeOfGrid; i++) {
    for (f = 0; f < sizeOfGrid; f++) {
      let gridElement = document.createElement("div");
      gridElement.classList.add("gridElement");
      container.appendChild(gridElement);
    }
  }

  gridElement = document.querySelectorAll(".gridElement");
  gridElement.forEach((elm) => {
    elm.classList.remove("active");
  })
  gridElement.forEach((elm) => {
    elm.addEventListener("mouseover", function () {
    elm.classList.add("active");
  });
  })
})

document.querySelector('input[name="clear"]').addEventListener('click', (e) => {
  e.preventDefault();
  gridElement.forEach((elm) => {
    elm.classList.remove("active");
  })
})