import "./homePage.css";
import createButton from "../Button/button.js";

const homePage = () => {
    const headerElement = document.createElement("header");
    const footerElement = document.createElement("footer");
    const asideElement = document.createElement("aside");
    const mainElement = document.createElement("main");

    const headerH1 = document.createElement("h1");
    headerH1.textContent = "WHAT TO DO?";
    headerElement.appendChild(headerH1);

    const footerP = document.createElement("p");
    footerP.textContent = "Made by Szabolcs";
    footerElement.appendChild(footerP);
    
    

    return {
        headerElement,
        asideElement,
        mainElement,
        footerElement,
    };
}

export default homePage;