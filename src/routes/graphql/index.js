const route = require('express').Router();
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const endPoint = '/graphql';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});



route.post('/', bodyParser.json(), graphqlExpress( req => {
	return {
		schema,
		context:{
			HeaderToken : req.get('authorization')
		}
	}
}));

route.get('/', graphiqlExpress({
	endpointURL: endPoint,
}));

module.exports = route;
