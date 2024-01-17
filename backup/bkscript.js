document.addEventListener("DOMContentLoaded", function () {
    // all the code here
    function addSampleTasks() {
        addTodo(todos, "Walk the dog", "low")
        addTodo(todos, "Clean the room", "medium");
        addTodo(todos, "Pay the bill", "high");
    }


    function renderTodos(todos) {
        const todoList = document.querySelector("#todoList");
        // clearing old todo list
        todoList.innerHTML = '';
        for (let todo of todos) {

            // loop through todos and create li element with todo details
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                    <span>${todo.name}</span>
                    <span class="badge bg-primary">${todo.urgency}</span>
                    <div>
                        <button class='btn btn-warning edit-btn'>Edit</button>
                        <button class="btn delete-btn btn-danger btn-sm delete-btn">Delete</button>
                    </div>
                `;
            todoList.appendChild(li);

            // add event listener to edit btn
            li.querySelector(".edit-btn").addEventListener('click', function () {
                // alert("Hi " + todo.name)
                const newName = prompt("Enter the new task name:", todo.name)
                const newUrgency = prompt("Enter the new urgency: ", todo.urgency)
                // console.log(newName, newUrgency)
                modifyTask(todos, todo.id, newName, newUrgency)
                renderTodos(todos)
            })

            // add event listener to delete btn
            li.querySelector(".delete-btn").addEventListener('click', function () {
                // alert("Delete: " + todo.name)
                const confirmation = confirm("Are you sure you want to delete this task: " + todo.name + " ?")
                if (confirmation) {
                    deleteTask(todos, todo.id)
                    renderTodos(todos)
                }
            })

        }
    }

    // CREATE
    const addBtn = document.querySelector("#addTodo")
    addBtn.addEventListener("click", function () {
        const newTaskInput = document.querySelector("#taskName")
        const taskName = newTaskInput.value

        const taskUrgencySelect = document.querySelector("#taskUrgency")
        const taskUrgency = taskUrgencySelect.value

        if (taskName) {
            addTodo(todos, taskName, taskUrgency)
            renderTodos(todos)
        }
    })




    addSampleTasks()
    renderTodos(todos)
});





































// Sanity check
// console.log("hello is linked")
// alert("Hello!")

// DOM = Document Object Model

// DOM Manipulation
// const btn = document.querySelector("#dom-btn") // # => id
// btn.addEventListener("click", function() {
//     alert("button is clicked")
// })