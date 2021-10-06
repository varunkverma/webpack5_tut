import "./hello-world-button.scss";

function HelloWorldButton() {
  const buttonCssClass = "hello-world-button";

  const button = document.createElement("button");
  button.innerHTML = "Hello World";
  button.classList.add(buttonCssClass);

  const body = document.querySelector("body");
  button.onclick = () => {
    const p = document.createElement("p");
    p.innerHTML = "Hello World!!";
    p.classList.add("hello-world-text");
    body.appendChild(p);
  };
  body.appendChild(button);
  return body;
}

export default HelloWorldButton;
