/* eslint-disable no-alert, no-console, no-unused-vars, no-multiple-empty-lines,
no-trailing-spaces, max-len, padded-blocks */

/* eslint func-names: ["error", "as-needed"] */

document.getElementById("two").innerHTML = "JS is working";

//j is lowercase: jQuery
if (jQuery) {
    $("#two").append("<br>Jquery is loaded - from CDN");
} else {
    alert("Jquery is NOT loaded");
}
