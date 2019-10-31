/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
/*  TEST CODE HERE  */
var myItem = new ToDoItem("Learn about cookies=;");
myItem.isCompleted = false;
// Oct 29th 2019 (Month starts at 0)
myItem.deadline = new Date(2019, 9, 29);
// stringify converts any object into any JSON string format
var strData = JSON.stringify(myItem);
console.log(strData);
// Setting a cookie called 'todoitems' that expire in a week
Cookies.set("todoitems", strData, { expires: 7 });
/* END OF TEST CODE */
window.onload = function () {
    var addBtn = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};
function main() {
    var item = getItem();
    displayToDoItem(item);
    // Save ToDoItem
}
/**
 * Move selected task to completed section
 * of web page
 */
function markAsComplete() {
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}
/**
 * Displays ToDoItem on the page
 * @param item The item to be displayed
 */
function displayToDoItem(item) {
    var div = document.createElement("div");
    div.onclick = markAsComplete;
    div.innerHTML = '<input type="checkbox">' + item.title;
    console.log(div);
    // display new div on page
    var displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}
/**
 * Gets the user input todo item
 * from the form
 */
function getItem() {
    var title = document.getElementById("title").value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById("deadline").value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;
    return item;
}
