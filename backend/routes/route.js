
const express = require('express');
const Router = express.Router();


const { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } = require( '../controller/todocontroller');

const route = express.Router();
const app = express();
app.use(express.json());



route.post('/api/todos', addTodo);
route.get('/api/todos', getAllTodos);
route.get('/api/todos/:id', toggleTodoDone);
route.put('/api/todos/:id', updateTodo);
route.delete('/api/todos/:id', deleteTodo);


module.exports=route;