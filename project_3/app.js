var express = require('express'); 
var nunjucks = require('nunjucks'); 
var app = express();
var server = require('http').Server(app);
const port = 3000;

var PATH_TO_TEMPLATES = '.' ;
nunjucks.configure( PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
} ) ;

app.use('/', express.static(__dirname + '/'));

app.get( '/home', function( req, res ) {
    var data = {
        firstName: 'Andy',
        lastName: 'Neale'
    } ;
    return res.render( 'index.html', data ) ;
} ) ;
server.listen(process.env.PORT || port, function () { console.log('Listening on ' + server.address().port); });