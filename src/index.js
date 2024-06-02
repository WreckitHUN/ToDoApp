import "./css/normalize.css";
import "./css/index.css";

import createButton from "./components/Button/button.js";
import homePage from "./components/HomePage/homePage";

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











