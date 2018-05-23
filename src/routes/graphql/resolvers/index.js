const { merge } = require('lodash');

const Usuario = require('./def/usuario');
const Rol = require('./def/rol');
const Lugar = require('./def/lugar');

module.exports = merge(
	Usuario,
	Rol,
	Lugar
);
