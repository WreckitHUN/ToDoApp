import "./modal.css";

const createModal = () => {
    const modalDiv = document.createElement("div");
    const modalContentDiv = document.createElement("div");
    const modalHeader = document.createElement("div");
    const closeSpan = document.createElement("span");
    const modalBody = document.createElement("div");


    modalDiv.classList.add("modal");
    modalContentDiv.classList.add("modalContent");
    modalHeader.classList.add("modalHeader");
    closeSpan.classList.add("close");
    modalBody.classList.add("modalBody");

    closeSpan.textContent = "X";

    modalHeader.appendChild(closeSpan);
    modalContentDiv.appendChild(modalHeader);
    modalContentDiv.appendChild(modalBody);
    modalDiv.appendChild(modalContentDiv);

    // When the user clicks on <span> (x), close the modal
    closeSpan.onclick = function() {
        modalDiv.style.display = "none";
    }

    return {
        modalDiv,
        modalContentDiv,
    };
}

export default createModal;