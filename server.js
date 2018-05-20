const express = require('express' );
const path = require('path');

require('dotenv').config()

const newsToken = process.env.NEWS_API_KEY;

console.log( 'loaded' );
console.log(newsToken);

const app = express();

app.use( express.static( 'dist' ) );

app.get('/', ( req, res ) => {
  res.sendFile( path.join( __dirname, 'index.html' ))
});

app.post('/token', (req, res) => res.send({ token: newsToken } ) );

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function () {
  console.log('listening on port ', server.address().port);
});