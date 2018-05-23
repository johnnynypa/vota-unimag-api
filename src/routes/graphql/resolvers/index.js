const { merge } = require('lodash');

const Usuario = require('./def/usuario');
const Rol = require('./def/rol');

module.exports = merge(
	Usuario,
	Rol
);
