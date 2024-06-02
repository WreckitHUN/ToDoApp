function addToLocalStorage(key, data) {
    if (typeof data != "string") {data = JSON.stringify(data);}
    localStorage.setItem(key, data);
  }

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

function clearLocalStorage() {
    localStorage.clear();
}

  export {addToLocalStorage, getFromLocalStorage, clearLocalStorage};
