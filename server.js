const express = require('express');
const app = express();
const todos = require('./todos');

app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

// post 

// put 

// delete

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});