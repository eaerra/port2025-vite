import { menu } from "./menu.js";
import { site } from "./site.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    site();
});