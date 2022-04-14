class Box {
  constructor(op) {
    this.width = "250px";
    this.height = "250px";
    this.opacity = op;
  }
  getwidth() {
    return this.width;
  }
  getheight() {
    return this.height;
  }

  getopacity() {
    return this.opacity;
  }
}

const handleColor = (id) => {
  const elemnt = document.getElementById(id);

  if (elemnt.style.backgroundColor === "red") {
    elemnt.style.backgroundColor = "white";
  } else {
    elemnt.style.backgroundColor = "red";
  }
};

let opacityState = 5;
const handlePlus = () => {
  const elemnt = document.getElementById("1-0");

  if (opacityState >= 200) {
    opacityState = 0;
  }
  elemnt.style.boxShadow = `inset ${opacityState}px ${opacityState}px gold`;
  opacityState += 20;
};

document.getElementById("plus").addEventListener("click", () => handlePlus());

// create blueArea elements
let B = new Box("12%");
const ba = document.getElementById("blueArea");
let opa = document;
for (let j = 0; j < 10; j++)
  for (let i = 0; i < 8; i++) {
    let square = document.createElement("div");
    square.className = "squares";
    square.style.backgroundColor = "white";
    square.style.width = B.getwidth();
    square.style.height = B.getheight();
    square.style.opacity = B.getopacity();

    const squareId = `${i}-${j}`;
    square.addEventListener("click", () => handleColor(squareId));

    // square.onclick(handleColor(squareId))
    square.id = squareId;
    if (i == 0 || i == 2) square.style.opacity = "100%";
    if (i == 1 || i == 3) square.style.opacity = "75%";
    if (i == 4 || i == 6) square.style.opacity = "50%";

    ba.appendChild(square);
  }
