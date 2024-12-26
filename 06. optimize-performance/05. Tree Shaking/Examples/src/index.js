import { add } from "./math.js";

function component() {
  const result = add(2, 5);
  const element = document.createElement("span");
  element.innerHTML = ["Result of a and b is: ", result].join("\n");

  return element;
}

document.body.appendChild(component());
