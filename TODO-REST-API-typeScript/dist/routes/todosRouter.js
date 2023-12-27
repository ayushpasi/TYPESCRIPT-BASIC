"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import express from "express";
let todos = [];
const router = (0, express_1.Router)();
// Middleware to parse JSON data
router.get("/", (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const body = req.body;
    const text = body.text;
    const newTodo = {
        id: new Date().toISOString(),
        text: text,
    };
    console.log(text);
    todos.push(newTodo);
    res.status(200).json({ success: "success" });
});
router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const body = req.body;
    const text = body.text;
    if (!text) {
        return res.status(400).json({ message: "Text is required for the update" });
    }
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex].text = text;
        return res.status(200).json({ message: "Updated todo", todos: todos });
    }
    res.status(404).json({ message: "Could not find todo for this ID" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: "Deleted todo", todos: todos });
});
exports.default = router;
