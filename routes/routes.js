var express = require('express');
var todosController = require('../controllers/todos');
var usersController = require('../controllers/users');

var router = express.Router();

router.get('/', function(req, res){
  res.end('hello from todos API');
});

router.post('/login', function(req, res){
  usersController.login(req, res);
});

router.post('/signup', function(req, res){
  usersController.signup(req, res);
});

router.get('/api/todos', function(req, res){
  todosController.getTodos(req, res);
});

router.get('/api/todos/:id', function(req, res){
  todosController.getTodo(req, res);
});

router.post('/api/todos', function(req, res){
  todosController.createTodo(req, res);
});

router.put('/api/todos/:id', function(req, res){
  todosController.updateTodo(req, res);
});

router.delete('/api/todos/:id', function(req, res){
  todosController.deleteTodo(req, res);
});

module.exports = router;
