let todos = [];
function addTodo(todos, name, urgency) {
    let newTodo = {
        id: Math.floor(Math.random() * 100 + 1),
        name: name,
        urgency: urgency
    };
    todos.push(newTodo);
}

function modifyTask(todos, id, newName, newUrgency) {
    // create the new task
    let modifiedTask = {
        "id": id,
        "name": newName,
        "urgency": newUrgency
    }

    // get the index of the task we want to replace
    const indexToReplace = todos.findIndex(function (t) {
        return t.id == id;
    });

    // need to check if the index really exists
    // if the id doesn't exist, then findIndex will return -1
    if (indexToReplace > -1) {
        todos[indexToReplace] = modifiedTask;
    }

}

function deleteTask(todos, id) {
    let indexToDelete = null;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDelete = i;
            break;
        }
    }
    if (indexToDelete !== null) {
        todos.splice(indexToDelete, 1);
    } else {
        console.log("Task is not found");
    }
}