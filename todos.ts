import { Router } from "express";

import {Todo} from "./models/todo";

const router=Router();

let todoList:Todo[]=[];
router.get('/',(req, res, next)=>{
    res.json({todo: todoList})
});

router.post('/todo',(req, res, next)=>{
    const newTodo: Todo ={
        id:new Date().toISOString(),
        text: req.body.text
    }
    todoList.push(newTodo);
    res.status(201).json({todo:todoList});
});

router.put('/todo/:todoId',(req, res, next)=>{
    const tid=req.params.todoId;
    const todoIndex=todoList.findIndex((todoItem) => todoItem.id === tid);
    if(todoIndex>=0)
    {
        todoList[todoIndex]={id:tid, text:req.body.text};
        return res.status(200).json({todo: todoList})
    }
    res.status(404).json({message: 'id could no be found'});
});

router.delete('/todo/:todoId',(req, res, next)=>{
    const tid=req.params.todoId;
    todoList=todoList.filter((todoItem)=> todoItem.id !== tid);
    res.status(200).json({todo:todoList});
})

export default router;