"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todoList = [];
router.get('/', (req, res, next) => {
    res.json({ todo: todoList });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todoList.push(newTodo);
    res.status(201).json({ todo: todoList });
});
router.put('/todo/:todoId', (req, res, next) => {
    const body = req.body;
    const params = req.params;
    const tid = params.todoId;
    const todoIndex = todoList.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todoList[todoIndex] = { id: tid, text: body.text };
        return res.status(200).json({ todo: todoList });
    }
    res.status(404).json({ message: 'id could no be found' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    todoList = todoList.filter((todoItem) => todoItem.id !== tid);
    res.status(200).json({ todo: todoList });
});
exports.default = router;
