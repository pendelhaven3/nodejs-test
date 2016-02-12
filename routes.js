module.exports = function(app){
    var users = require('./users');
    app.get('/users', users.findAll);
    app.get('/users/:id', users.findById);
    app.post('/users', users.add);
    app.put('/users/:name', users.update);
    app.delete('/users/:name', users.delete);
}