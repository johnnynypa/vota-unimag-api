const { merge } = require('lodash');

const Departamento = require('./def/departamento');
const Municipio = require('./def/municipio');
const Usuario = require('./def/usuario');
const Docente = require('./def/docente');
const Institucion = require('./def/institucion');
const Administrativo = require('./def/administrativo');
const Grado = require('./def/grado');
const Curso = require('./def/curso');
const Area = require('./def/area');
const Asignatura = require('./def/asignatura');
const Periodo = require('./def/periodo');
const Acudiente = require('./def/acudiente');
const Estudiante = require('./def/estudiante');

module.exports = merge(
	Departamento,
	Municipio,
	Usuario,
	Docente,
	Institucion,
	Administrativo,
	Grado,
	Curso,
	Area,
	Asignatura,
	Periodo,
	Acudiente,
	Estudiante
);
