document.addEventListener('DOMContentLoaded', function () {
    console.log("hello")
    function main() {

        // add three todos
        addTodo(todos, "Walk the dog", 5);
        addTodo(todos, "Clean the room", 3);
        addTodo(todos, "Pay the bill", 2);

        const form = document.querySelector("#todo-form")
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            const taskNameInput = document.querySelector("#taskName")
            const taskName = taskNameInput.value;

            // const taskUrgencySelect = document.querySelector("#taskUrgency");
            // const taskUrgency = taskUrgencySelect.value;
            const taskUrgencyRadio = document.querySelector("input[name='taskUrgency']:checked")
            // console.log(taskUrgencyRadio.value)
            const taskUrgency = taskUrgencyRadio.value


            if (taskName) {
                addTodo(todos, taskName, taskUrgency);
                renderTodos(todos);
                taskNameInput.value = '';
            }
        })


        const todoList = document.querySelector("#todoList");
        todoList.addEventListener("click", function (event) {
            // console.log(event.target)
            // Edit btn
            if (event.target.classList.contains('edit-btn')) {
                console.log(event.target.dataset.taskId)
                const todoId = parseInt(event.target.dataset.taskId)
                const todo = todos.find(t => t.id === todoId)

                const newName = prompt("Enter the new task name: ", todo.name);
                const newUrgency = prompt("Enter the new urgency: ", todo.urgency);
                console.log("newName: ", newName);
                console.log("newUrgency: ", newUrgency);

                modifyTask(todos, todo.id, newName, newUrgency);
                renderTodos(todos);
            }

            // let student try delete
            if (event.target.classList.contains('delete-btn')) {
                const todoId = parseInt(event.target.dataset.taskId);

                const confirmDelete = confirm("Are you sure you want to delete this task?");
                if (confirmDelete) {
                    deleteTask(todos, todoId);
                    renderTodos(todos);
                }
            }
        })
    }

    function renderTodos(todos) {
        const todoList = document.querySelector("#todoList");
        todoList.innerHTML = ""
        for (let todo of todos) {
            const li = document.createElement("li")
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                                ${todo.name} <span class="badge bg-primary">${todo.urgency}</span>               
                                <button data-task-id=${todo.id} class="btn edit-btn btn-success btn-sm">Edit</button>
                                <button data-task-id=${todo.id} class="btn delete-btn btn-danger btn-sm">Delete</button>
                                `;
            todoList.appendChild(li)

            // li.querySelector(".edit-btn").addEventListener('click', function () {
            //     // alert("Editing: " + todo.name)
            //     const newName = prompt("Enter the new task name: ", todo.name);
            //     const newUrgency = prompt("Enter the new urgency: ", todo.urgency)
            //     modifyTask(todos, todo.id, newName, newUrgency)
            //     renderTodos(todos);
            // })

            // li.querySelector(".delete-btn").addEventListener('click', function () {
            //     const confirmation = confirm("Do you want to delete the task: " + todo.name + "?");
            //     if (confirmation) {
            //         deleteTask(todos, todo.id);
            //         renderTodos(todos);
            //     }
            // });
        }
    }

    // const addTodoButton = document.querySelector("#addTodo");
    // addTodoButton.addEventListener('click', function () {
    //     const taskNameInput = document.querySelector("#taskName")
    //     const taskName = taskNameInput.value;

    //     const taskUrgencySelect = document.querySelector("#taskUrgency");
    //     const taskUrgency = taskUrgencySelect.value;

    //     if (taskName) {
    //         addTodo(todos, taskName, taskUrgency);
    //         renderTodos(todos);
    //         taskNameInput.value = '';
    //     }
    // });


    main();
    renderTodos(todos)
});