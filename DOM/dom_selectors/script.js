// 2. Selecting Elements in the DOM
// You can select HTML elements in multiple ways:

// 2.1 document.getElementById(id)
// Selects an element by its id.

let title = document.getElementById("title");
console.log(title.innerText);  // "Hello, DOM!"


// 2.2 document.getElementsByClassName(className)
// Selects elements by class, returns an HTMLCollection (array-like).


let paragraphs = document.getElementsByClassName("text");
console.log(paragraphs[0].innerText);  // "This is a paragraph."


// 2.3 document.getElementsByTagName(tagName)
// Selects elements by tag name.

let allParas = document.getElementsByTagName("p");
console.log(allParas.length);  // Number of <p> elements


// 2.4 document.querySelector(selector)
// Selects the first matching element (supports CSS selectors).
let firstPara = document.querySelector(".text"); 
console.log(firstPara.innerText);



// 2.5 document.querySelectorAll(selector)
// Selects all matching elements (returns a NodeList).

let allText = document.querySelectorAll(".text");
allText.forEach(p => console.log(p.innerText));



// 3. Modifying the DOM
// 3.1 Changing Text Content
// innerText → Updates visible text only
// textContent → Updates hidden & visible text
// innerHTML → Can insert HTML (⚠ security risk)

let title1 = document.getElementById("title");

// Changing text
title1.innerText = "New Title";  
title1.textContent = "Another Title";
title1.innerHTML = "<span style='color:red'>Styled Title</span>";


// 3.2 Changing Attributes
// Modify attributes using .setAttribute() or directly.

let link = document.querySelector("a");

link.setAttribute("href", "https://example.com");
console.log(link.getAttribute("href")); // "https://example.com"

link.href = "https://another.com";  // Direct modification




// 3.3 Changing Styles
// Modify CSS styles dynamically.

let heading = document.getElementById("title");
heading.style.color = "blue";
heading.style.fontSize = "24px";
heading.style.backgroundColor = "yellow";
