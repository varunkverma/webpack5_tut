import NavigationBar from "./components/navigation-bar/navigation-bar.js";

const navigationItems = [
  {
    url: "/hello-world-page",
    title: "Hello World Page",
  },
  {
    url: "/kiwi-page",
    title: "Kiwi Page",
  },
];

NavigationBar(navigationItems);

const URL = window.location.pathname;

if (URL === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    HelloWorldPage();
  });
}
if (URL === "/kiwi-page") {
  import("KiwiApplication/KiwiPage").then((KiwiPageModule) => {
    const KiwiPage = KiwiPageModule.default;
    KiwiPage();
  });
}
console.log("dashboard");
