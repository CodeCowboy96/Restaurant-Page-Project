// index.js

import "./style.css";
import { renderHomepage } from "./home.js";
import { renderMenu } from "./menu.js"
import { renderAbout } from "./about.js"

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

renderHomepage ();

homeBtn.addEventListener("click", renderHomepage);
menuBtn.addEventListener("click", renderMenu);
aboutBtn.addEventListener("click", renderAbout);




