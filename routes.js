// Require controllers
var siteController = require('./controllers/index');
var fuzzController = require('./controllers/fuzz');

// Routes
//app.get('/', siteController.index);
//app.get('/decode', fuzzController.decode);

module.exports = function(app) {
    app.get('/decode', fuzzController.decode);

    app.get('/scramble', fuzzController.scramble);

    app.get('/pattern', fuzzController.getPattern);

    // Other routes may use app.post, app.get, app.delete

    // Front end
    //app.get('*', function(req, res) {
    //    res.sendFile('./public/views/index.html');
    //});
};