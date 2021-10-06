import foodImage from "./food.jpg";
import "./food-image.scss";

function FoodImage() {
  const image = document.createElement("img");
  image.src = foodImage;
  image.alt = "food";

  image.classList.add("food-image");

  const bodyDomElement = document.querySelector("body");
  bodyDomElement.appendChild(image);

  return bodyDomElement;
}

export default FoodImage;
