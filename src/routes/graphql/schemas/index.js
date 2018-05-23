'use strict';
const Schema = require('./schema.graphql');
const Query = require('./query.graphql');
const Mutation = require('./mutation.graphql');
const Usuario = require('./def/usuario');
const Rol = require('./def/rol');


module.exports = [
	Schema,
	Query,
	Mutation,
	Usuario,
	Rol
];
