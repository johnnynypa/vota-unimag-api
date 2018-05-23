const { merge } = require('lodash');

const Usuario = require('./def/usuario');
const Rol = require('./def/rol');
const Lugar = require('./def/lugar');
const Mesa = require('./def/mesa');
const TipoUsuario = require('./def/tipoUsuario');
const Facultad = require('./def/facultad');
const Programa = require('./def/programa');
const Organo = require('./def/organo');
const StatusUser = require('./def/statusUser');
const Candidato = require('./def/candidato');

module.exports = merge(
	Usuario,
	Rol,
	Lugar,
	Mesa,
	TipoUsuario,
	Facultad,
	Programa,
	StatusUser,
	Organo,
	Candidato
);
