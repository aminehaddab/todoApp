let todos = [];
let id = 0;

function getTodos() {
  return todos;
}

function addTodo(todo) {
  id++;
  todo.id = id;
  todos.push(todo);
}

function updateTodo(todoId, updatedTodo) {
  const index = todos.findIndex(todo => todo.id == todoId);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    return true;
  }
  return false;
}

function deleteTodo(todoId) {
  const index = todos.findIndex(todo => todo.id == todoId);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
};
