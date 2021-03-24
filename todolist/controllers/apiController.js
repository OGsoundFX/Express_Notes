const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/test', (req, res) => {
        Todos.find({}, function(err, todos) {
            if (err) throw err;
            
            res.send(todos);
        });
    });
    
    app.get('/api/todos/:uname', function(req, res) {
        Todos.find({ username: req.params.uname }, function(err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });

    app.post('/api/todos/dashboard', urlencodedParser, function(req, res) {
        Todos.find({ username: req.body.name }, function(err, todos) {
            if (err) throw err;
            
            const listOfTodos = {};
            todos.forEach((todo) => {
                listOfTodos[todo.id] = todo.todo;
            });

            res.render('dashboard', {
                name: req.body.name,
                todos: todos,
                list: listOfTodos
            });
        });
        
    });

    app.post('/api/todos/new', (req, res) => {
        var newTodo = Todos({
            username: req.body.name,
            todo: req.body.todo,
            isDone: false
        });
        newTodo.save(function(err) {
            if (err) throw err;
            res.redirect(`/api/todos/${req.body.name}`);
        });
    });
    
    app.post('/api/todo', function(req, res) {
        
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {username: req.body.username, todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo) {
                if (err) throw err;
                
                res.send('Success');
            });
        }
        
        else {
           
           var newTodo = Todos({
               username: 'test',
               todo: req.body.todo,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newTodo.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
            
        }
        
    });
    
    app.delete('/api/todo', function(req, res) {
        
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });

    app.post('/api/delete', (req, res) => {
        Todos.findByIdAndRemove(Object.keys(req.body)[0], function(err) {
            if (err) throw err;
            res.redirect('/');
        })
    });

    app.post('/api/done', (req, res) => {
        Todos.findByIdAndUpdate(req.body.id, { isDone: true }, function(err) {
            if (err) throw err;
            res.redirect(`/api/todos/${Object.keys(req.body)[0]}`);
        })
    });
    
}