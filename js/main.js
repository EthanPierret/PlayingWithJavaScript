




console.log("testing");

let name = "Ethan";

console.log("Hi, ", name);




const sectionfirst = document.querySelector(".article__section");

console.log("First article: ", sectionfirst);


// small text -> large text
const smallTextEl = document.querySelector(".smallText");
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");



// Get all <p> elements in the document
let x = document.querySelectorAll(".article__header");

// Set the background color of the first <p> element
x[0].textContent = ("Welcome to the " + name + " blog");  


let y = document.querySelectorAll(".article__header");

x[0].classList = "article__header important";

let remove1 = document.querySelector(".dashed");

remove1.remove();

let goldenrod = document.querySelector(".article__footer");

goldenrod.classList.add("goldenrod");





















