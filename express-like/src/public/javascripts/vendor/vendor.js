import "bootstrap"; // imported from node modules

import $ from "jquery"; // imported from node modules
console.log("This doesnt have to be called or imported to run...");
console.log(`JQuery is working in vendor.js if non-zero value: ${$("body").length}`);

export const test1 = () => {
    console.log("This method must be called to display this msg");
};

export const test2 = () => {
    console.log("Call me too");
};