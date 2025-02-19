const h1Ref = document.getElementById("title");
const lettergradeRefs = document.getElementsByClassName("letter-grade");
const pRef = document.querySelector("p");
const h1AltRef = document.querySelector("#title");
const liRefs = document.querySelectorAll("li");
const ulRef = document.querySelector("ul");

console.log("h1Ref:", h1Ref);
console.log("lettergradeRefs:", lettergradeRefs);
console.log("pRef:", pRef);
console.log("h1AltRef:", h1AltRef);
console.log("liRefs:", liRefs);
console.log("ul textContent", ulRef.textContent);
console.log("ul innerText", ulRef.innerText);
console.log("ul innerHTML", ulRef.innerHTML);

pRef.innerText = "I am a paragraph";

ulRef.innerHtml = "<li class = 'letter-grade'>C</li>";
ulRef.innerHTML += "<li class = 'letter-grade'>D</li>";
ulRef.innerHTML += "<li class = 'letter-grade' style='display: none'>E</li>";
ulRef.innerHTML += "<li class = 'letter-grade'>F</li>";

h1Ref.style.backgroundColor = "red";
h1Ref.style.color = "white";

pRef.style.backgroundColor = "#00ff0050";
pRef.style.color = "rgba(255, 50, 0, 1)";
pRef.style.height = "400px";
pRef.style.width = "400px";

// h1Ref.style.display = "none";
// h1Ref.style.display = "block-inline"; //gets rid of it

const ulLiRefs = ulRef.querySelectorAll("li");
console.log("ulLiRefs:", ulLiRefs);


const googleLinkRef = document.querySelector("a.google");
googleLinkRef.href = "https://www.google.com";
googleLinkRef.target = "_blank";

const inputRef = document.querySelector("input");
inputRef.setAttribute("placeholder", "green jello is in fruit");

pRef.dataset.age = "89";
console.log(pRef);

console.log(pRef.dataset);

pRef.classList.add("blue");
pRef.classList.add("blue");

pRef.classList.remove("blue");

console.log(pRef.classList.contains("blue"));

const newLi = document.createElement("li");

newLi.innerText = "G";
newLi.classList.add("letter-grade");

ulRef.appendChild(newLi);