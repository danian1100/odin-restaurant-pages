import "./styles.css";
import { displayHomePage } from "./home.js";
import { displayMenuPage } from "./menu.js";
import { displayContactPage } from "./contact.js";

window.addEventListener("load", displayHomePage);

const btns = Array.from(document.querySelectorAll("button"));

btns.at(0).addEventListener("click", () => {
    displayHomePage();
});

btns.at(1).addEventListener("click", () => {
    displayMenuPage();
});

btns.at(2).addEventListener("click", () => {
    displayContactPage();
});