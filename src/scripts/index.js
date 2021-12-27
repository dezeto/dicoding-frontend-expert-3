import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector("#nav-dropdown"),
  drawer: document.querySelector("#nav-list"),
  content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
