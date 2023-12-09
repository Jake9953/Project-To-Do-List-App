var name = prompt("What`s your name buddy?");
alert("welcome " + name)


// Creating variables for the elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Click function for the button 
function addTask() {
  if (inputBox.value === '') {
    alert("KINDLY ADD SOME TEXT!!!")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Creates the cross button to clear tasks that are done or unwanted
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
  }
  // This clears the search box after adding the task.
  inputBox.value = "";
  // Any time we add the data, this called function saves it to function we created at the end of our script
  saveData();
}

// Click function (Event Listener) that will be able to check, uncheck and delete tasks in our to do app

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    // When we check or uncheck our tasks, we also should save the tasks, so we also call our function saveData
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  // Still have we have deleted the completed tasks, we also need to save the tasks that remain, so we call our function saveData once more.
  saveData();
}, false);

// Tis function will be able to store our tasks so that in any cse the page reloads or closed we still have our tasks in place.

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// This function will display data that is saved once we open our browser again

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
// This function call will be the one that enables display the data after we reopen the browser.
showTask(); 
