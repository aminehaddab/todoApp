const express = require('express');
const app = express();
const todos = require('./todos');

app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos.getTodos());
});

app.post('/todos', (req, res) => {
  const { description, done, important} = req.body;
  if (description === undefined || done === undefined || important=== undefined) {
    return res.status(400).json({ error: 'Description, done and importance status are required' });
  }
  const todo = { description, done, important };
  todos.addTodo(todo);
  res.status(201).json(todo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { description, done, important } = req.body;
  if (description === undefined || done === undefined || important=== undefined) {
    return res.status(400).json({ error: 'Description, done and importance status are required' });
  }
  const updatedTodo = { description, done, important };
  const result = todos.updateTodo(id, updatedTodo);
  if (result) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const result = todos.deleteTodo(id);
  if (result) {
    res.status(204).send("Ressource deleted");
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
