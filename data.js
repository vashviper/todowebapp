let todos = [];

function addTodo(todos, name, urgency) {
    let newTodo = {
        // id is unique
        id: Math.floor(Math.random() * 100 + 1), // Random number from 1 - 100
        name: name,
        urgency: urgency
    };
    todos.push(newTodo);
}

function modifyTask(todos, id, newTaskName, newUrgency) { // id = 30
    let task = null;

    for (let t of todos) {
        if (t.id == id) {
            task = t;
            break
        }
    }

    if (task) {
        task.name = newTaskName;
        task.urgency = newUrgency;
    } else {
        console.log("Task is not found modify");
    }
}

function deleteTask(todos, id) { 
    let indexToDelete = null; 
    // loop through todos array
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDelete = i;
        }
    }

    // deleting of item from todos array
    if (indexToDelete !== null) {
        todos.splice(indexToDelete, 1);
    } else {
        console.log("Task is not found delete");
    }
}


function deleteAllTaskWithId(todos, id) {
    let indexToDeleteArray = []

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDeleteArray.push(i)
        }
    }

    for (let i = indexToDeleteArray.length - 1; i >= 0; i--) {
        let indexToDelete = indexToDeleteArray[i]
        todos.splice(indexToDelete, 1);
    }
    
}