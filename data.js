// at the top of `data.js`
const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
const BIN_ID = "65ad3521dc7465401897dbb6";
const MASTER_KEY = "$2a$10$64dTsCnOhcZOxrDwSgyf8OW1Q/w2uUYZjAAV2zoCVREzkZqQ5CKua";




let todos = [];

function addTodo(todos, name, urgency) {
  let newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    urgency: urgency
  };
  todos.push(newTodo);
}

function modifyTask(todos, id, newTaskName, newUrgency) {
  let task = null;
  for (let t of todos) {
    if (t.id == id) {
      task = t;
    }
  }
  if (task) {
    task.name = newTaskName;
    task.urgency = newUrgency;
  } else {
    console.log("Task is not found");
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

// ...add at the end of `data.js`
async function loadTasks() {
    const response = await axios.get(BASE_JSON_BIN_URL + "/" + BIN_ID + "/latest");
    console.log(response.data)
    return response.data.record;
  }

  async function saveTasks(todos) {
    const response = await axios.put(`${BASE_JSON_BIN_URL}/${BIN_ID}`, todos, {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY
      }
    });
    return response.data;
  
  }