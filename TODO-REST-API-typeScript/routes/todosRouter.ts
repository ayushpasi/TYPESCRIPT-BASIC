import { Router } from "express";
import { Todo } from "../models/todoModel";
// import express from "express";
let todos: Todo[] = [];
const router = Router();

// Middleware to parse JSON data

router.get("/", (req, res) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const text = req.body.text;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: text,
  };
  console.log(text);
  todos.push(newTodo);
  res.status(200).json({ success: "success" });
});

router.put("/todo/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  const text = req.body.text;

  if (!text) {
    return res.status(400).json({ message: "Text is required for the update" });
  }

  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
  if (todoIndex >= 0) {
    // Update the todo text if the ID is found
    todos[todoIndex].text = text;
    return res.status(200).json({ message: "Updated todo", todos: todos });
  }

  res.status(404).json({ message: "Could not find todo for this ID" });
});
router.delete("/todo/:todoId", (req, res, next) => {
  todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
  res.status(200).json({ message: "Deleted todo", todos: todos });
});
export default router;
