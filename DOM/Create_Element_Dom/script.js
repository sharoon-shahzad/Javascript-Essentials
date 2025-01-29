

const parent = document.querySelector('.parent');
// console.log(parent);

// console.log(parent.children);

// console.log(parent.children[1].innerHTML)


//  html collection
// for( let i =0 ; i < parent.children.length ; i++){
//     console.log(parent.children[i].innerHTML);
// }
// for( let i =0 ; i < parent.children.length ; i++){
// //     console.log(parent.children[i]);
// // }
// parent.children[1].style.color = 'red'


// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dauyone = document.querySelector('.day');
// console.log(dauyone);

// Array.from(parent.children).forEach((child) => {
//     console.log(child);
// })
// console.log(dauyone.parentElement); // dauyone.parentElement


console.log("Nodes",parent.childNodes);



// creating elements
const div = document.createElement('div');
console.log(div);

div.className = 'day';

div.id = Math.floor(Math.random()*10 + 1);
parent.appendChild(div);

div.setAttribute("title", "chai aur code");
div.style.backgroundColor = "green";
div.style.padding = "12px";

div.innerText = 'Saturday';// overrides the previos values and hurdles the performance

//another approach
const addTextNode = document.createTextNode('Saturday');