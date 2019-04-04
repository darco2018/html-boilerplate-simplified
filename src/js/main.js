document.getElementById("two").innerHTML = "JS is working";

if (jQuery) {
    $("#two").append("<br>Jquery is loaded - from CDN");
} else {
    alert("Jquery is NOT loaded");
}
