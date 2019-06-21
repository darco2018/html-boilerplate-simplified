import "bootstrap"; // imported from node modules

import $ from "jquery"; // imported from node modules

/* NOT WORKING:
import "./jquery"
import jQuery from "./jquery"
console.log($("body").length); */

// local imports CANNOT have 2 dots in the name when syntax: import <filename>
// Perhaps its ok with require & its ok with import { <name> } from <filename>
// import "./jquery-2.2.4-min"; import from the same folder

console.log("This doesnt have to be called or imported to run...");
console.log(`JQuery is working in vendor.js if non-zero value: ${$("body").length}`);

export const test1 = () => {
    console.log("This method must be called to display this msg");
};

export const test2 = () => {
    console.log("Call me too");
};
