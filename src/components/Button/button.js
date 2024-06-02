import "./button.css";

const createButton = (type = "btnPrimary", text = "BUTTON") => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn", type);
    buttonElement.textContent = text;
    
    return buttonElement;
}

export default createButton;