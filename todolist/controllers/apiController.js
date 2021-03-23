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

        // res.send(`hello ${req.body.name }`);
        // console.log(req.body.name);
        Todos.find({ username: req.body.name }, function(err, todos) {
            if (err) throw err;
            
            const listOfTodos = {};
            todos.forEach((todo) => {
                // listOfTodos.push(todo.id)
                listOfTodos[todo.id] = todo.todo;
            });

            res.render('dashboard', {
                name: req.body.name,
                todos: todos,
                list: listOfTodos
            });
            // res.send(todos[0].username);
        });
        
    });
    
    app.get('/api/todo/:id', function(req, res) {
       
       Todos.findById({ _id: req.params.id }, function(err, todo) {
           if (err) throw err;
           
           res.send(todo);
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

        // Todos.find({ id: req.body.id }, function(err, todo) {
        //     console.log(todo);
        // });
    });
    
}