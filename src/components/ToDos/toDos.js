import "./toDos.css";

const createToDo = () => {
    const todoDiv = document.createElement("div");
    const titleP = document.createElement("p");
    const dateP = document.createElement("p");
    const checkButton = document.createElement("button");

    todoDiv.classList.add("todo");
    titleP.classList.add("title");
    dateP.classList.add("date");
    checkButton.classList.add("checkButton");

    todoDiv.appendChild(checkButton);
    todoDiv.appendChild(titleP);
    todoDiv.appendChild(dateP);

    checkButton.addEventListener("click", () => {
        checkButton.classList.toggle("active");
    })

    return {
        todoDiv, 
        titleP, 
        dateP,
        checkButton
    };
}

export default createToDo;