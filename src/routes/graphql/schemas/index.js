'use strict';
const Schema = require('./schema.graphql');
const Query = require('./query.graphql');
const Mutation = require('./mutation.graphql');
const Usuario = require('./def/usuario');
const TipoUsuario = require('./def/tipoUsuario');
const Candidato = require('./def/candidato');
const StatusUser = require('./def/statusUser');
const Facultad = require('./def/facultad');
const Programa = require('./def/programa');
const Organo = require('./def/organo');
const Voto = require('./def/voto');
const Mesa = require('./def/mesa');
const Lugar = require('./def/lugar');
const Rol = require('./def/rol');


module.exports = [
	Schema,
	Query,
	Mutation,
	Usuario,
	Rol,
	Lugar,
	Mesa,
	Voto,
	Organo,
	Programa,
	Facultad,
	StatusUser,
	Candidato,
	TipoUsuario
];
