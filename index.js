// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const config = require('dos-config');
const cors = require('cors');
const path = require('path');
require('./src/model');

// Config
const port = parseInt(process.env.PORT, 10) || config.port;
const dev = process.env.NODE_ENV !== 'production';

//Others
const login = require('./src/routes/login');
const server = express();


server.use(cors());
server.use(bodyParser.json());
server.use(express.static('public'));

server.use('/login', login);


//API GRAPHQL
const graphql = require('./src/routes/graphql')
const endPointGraphql = '/graphql'

server.use(endPointGraphql, (req,res, next) => {
	next();
});
server.use(endPointGraphql, graphql);

if(dev){
	server.use('/graphiql', graphql);
}else{
	server.use(express.static(path.join(__dirname, 'build')));

	server.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}

server.listen(port, (err) => {
	if (err) throw err
	console.log(`> Ready on http://localhost:${port}`)
});

process.on('unhandledRejection', (reason) => {
	console.log('REJECTION', reason)
});