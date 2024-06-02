import "./css/normalize.css";
import "./css/index.css";

import createButton from "./components/Button/button.js";
import homePage from "./components/HomePage/homePage";
import {addToLocalStorage, getFromLocalStorage, clearLocalStorage} from "./components/localStorageHandler.js";

const content = document.querySelector("#content");

// Initial render
const homePageElements = homePage();
for (let key in homePageElements){
    content.appendChild(homePageElements[key]);
}

// Create buttons
const allTasksButton = createButton("btnPrimary", "All tasks");
const todayButton = createButton("btnPrimary", "Today");
const thisWeekButton = createButton("btnPrimary", "This Week");
const addToDoButton = createButton("btnPlus", "+");

homePageElements.asideElement.appendChild(allTasksButton);
homePageElements.asideElement.appendChild(todayButton);
homePageElements.asideElement.appendChild(thisWeekButton);
homePageElements.mainElement.appendChild(addToDoButton);

content.addEventListener("click", clickHandler);

// Test add data to local storage
let data = [
    {
        title: "Home Work",
        description: "1-5pages",
        priority: 2,
        due: 20240607
    },
    {
        title: "Shower",
        description: "10 mins",
        priority: 5,
        due: 20240604
    }
];

function clickHandler(event){
    const button = event.target;
    if (button === allTasksButton){
        console.log("allTask");
    }
    else console.log("hehe"); 
}

addToLocalStorage("todos", data);



function addLeadingZero(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number.toString();
    }
}

let today = new Date();
let date = today.getFullYear().toString() + addLeadingZero(today.getMonth() + 1) + addLeadingZero(today.getDate());
console.log(date);












