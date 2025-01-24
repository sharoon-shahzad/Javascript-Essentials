



const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItems = breakfastMenu.map((item,index) => `<p>${index+1}:${item}</p>`).join("");
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItems;

//Displaying the mainCourseMenu
let maincourseMenuItems = document.getElementById("maincourseMenuItems");

mainCourseMenu.forEach((item,index) => {
    maincourseMenuItems.innerHTML += `<p>${index+1}:${item}</p>`
});