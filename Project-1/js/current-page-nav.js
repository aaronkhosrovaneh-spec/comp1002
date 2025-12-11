// Get the current URL for the page
const pageURL = window.location.href;
console.log(pageURL);
// Grab all the <a> elements inside <main> sections
const navLinks = document.querySelectorAll("main section a");
console.log(navLinks);
// Create a place to store the href value for each <a> element
let linkURL;
// For each <a> element in navLinks, compare the href with the current page URL
navLinks.forEach((element) => {
    // Grab the href property of each link
    linkURL = element.href;
    console.log(linkURL);
    // Check for a match with the current page
    if (linkURL === pageURL) {
        element.classList.add("current");
    }
});
