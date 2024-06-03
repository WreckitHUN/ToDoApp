import "./css/normalize.css";
import "./css/index.css";

import createButton from "./components/Button/button.js";
import homePage from "./components/HomePage/homePage";
import createToDo from "./components/ToDos/toDos.js";
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

// TEST TODO
const todo = createToDo();
todo.checkButton.id = "todo0";
homePageElements.mainElement.appendChild(todo.todoDiv);

todo.titleP.textContent = "Title";
todo.dateP.textContent = "31/02/2024";

content.addEventListener("click", clickHandler);

// Test add data to local storage
let _data = [
    {   
        id: 0,
        title: "Home Work",
        description: "1-5pages",
        priority: 2,
        due: 20240607
    },
    {
        id: 1,
        title: "Shower",
        description: "10 mins",
        priority: 5,
        due: 20240604
    }
];

function clickHandler(event){
    const button = event.target;
    const data = getFromLocalStorage("todos");
    if (button === allTasksButton){
        // add data to mainElement
        console.log("allTask");
    } else if( button === todayButton){
        console.log("today");
    }else if(button === thisWeekButton){
        console.log("this week");
    }else if(button === addToDoButton){
        console.log("addtodo");
    }
    
     
}

addToLocalStorage("todos", _data);



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












