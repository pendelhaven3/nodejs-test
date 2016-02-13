module.exports = function(app){
    var characters = require('./controllers/characters.js');
    app.get('/character', characters.findAll);
    app.get('/character/:id', characters.findById);
    app.post('/character', characters.add);
    app.put('/character/:id', characters.update);
    app.delete('/character/:id', characters.delete);
    app.get('/import', characters.import);
}