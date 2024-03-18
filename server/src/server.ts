import express from "express";
const app = express();

const PORT = 8000;

// Middleware to parse JSON requests with a size limit of 10kb
app.use(express.json({ limit: "10kb" }));

// Sample todo data
const todos = [
  { id: 1, title: "coding" },
  { id: 2, title: "cleaning" },
];

// GET request to fetch all todos
app.get("/todos", (req, res) => {
  // Return the array of todo objects as JSON
  res.status(200).json(todos);
});

// POST Request to add a new todo
app.post("/todos", (req, res) => {
  // Assuming the request body contains a username
  const { username } = req.body;
  // Respond with a status of 201 (Created) and a message
  res.status(201).send(`Todo created by ${username}`);
});

// DELETE request to delete a todo by ID
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  // Assuming you have logic to find and remove the todo with the given ID from the array
  // For simplicity, just sending a success message here
  res.status(204).send(`Todo with ID ${id} deleted successfully`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
