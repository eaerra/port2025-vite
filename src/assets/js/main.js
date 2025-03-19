import { intro } from "./intro.js";
import { skill } from "./skill.js";
import { site } from "./site.js";
import { base } from "./base.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
    smooth();
    skill();
    intro();
    link();
    site();
    base();
});

