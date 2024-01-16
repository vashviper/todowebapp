let tasks = [];
let editingTaskId = null;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const task = {
            id: Date.now(),
            text: taskInput.value.trim(),
        };

        tasks.push(task);
        updateTaskList(taskList);
        taskInput.value = "";
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    const taskList = document.getElementById("taskList");
    updateTaskList(taskList);
}

function editTask(id) {
    editingTaskId = id;
    const editedTaskText = document.getElementById("editedTaskText");
    const task = tasks.find(task => task.id === id);
    
    editedTaskText.value = task.text;

    // Display the Bootstrap modal for editing
    const editTaskModal = new bootstrap.Modal(document.getElementById('editTaskModal'), {
        keyboard: false
    });
    editTaskModal.show();
}

function submitEditedTask() {
    const editedTaskText = document.getElementById("editedTaskText").value;

    if (editedTaskText.trim() !== "") {
        const editedTask = tasks.find(task => task.id === editingTaskId);
        editedTask.text = editedTaskText;
        editingTaskId = null;

        const taskList = document.getElementById("taskList");
        updateTaskList(taskList);

        // Close the Bootstrap modal after submitting
        const editTaskModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
        editTaskModal.hide();
    }
}

function updateTaskList(taskList) {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
