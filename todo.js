
const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");
const inputHandler = function () {
    const newTask = input.value;
    if (newTask.length == 0)
        return;
    const taskElem = createTask(newTask);
    // append 
    taskList.appendChild(taskElem);
    input.value = "";
    const deleteBtn = taskElem.children[1];
    deleteBtn.addEventListener("click", function () {
        taskElem.remove();
    })
}

function createTask(newTask) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "Delete";
    li.textContent = newTask;

    div.appendChild(li);
    div.appendChild(button);
    return div;


}

button.addEventListener("click", inputHandler);

