let tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", () => {
    let title = document.getElementById("taskTitle").value;
    let desc = document.getElementById("taskDesc").value;
    if (title && desc) {
        tasks.push({ title, desc, completed: false });
        renderTasks();
        document.getElementById("taskTitle").value = '';
        document.getElementById("taskDesc").value = '';
    }
});

function renderTasks() {
    let list = document.getElementById("todoList");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        
        let span = document.createElement("span");
        span.innerText = `${task.title}: ${task.desc}`;
        span.style.cursor = "pointer";
        if (task.completed) span.style.textDecoration = "line-through";
        
        span.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        let delBtn = document.createElement("button");
        delBtn.innerText = "X";
        delBtn.style.marginLeft = "10px";
        delBtn.style.color = "red";
        delBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}