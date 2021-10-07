import "./navigation-bar.scss";
function NavigationBar(navItems = []) {
  const listItems = navItems.map(
    (navItem) =>
      `
        <li>
            <a href="${navItem.url}">${navItem.title}</a>
        </li>    `
  );
  const ul = document.createElement("ul");
  ul.innerHTML = listItems.join("");
  ul.classList.add("navigation-bar");
  document.querySelector("body").appendChild(ul);
}

export default NavigationBar;
