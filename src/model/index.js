const config = require("dos-config").db;
const Sequelize = require('sequelize');
const path = require("path");

const sequelize = new Sequelize(config.name, config.auth.user, config.auth.password, {
	host: config.host,
	dialect: config.dialect,
	port: config.port,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

//Importamos los modelos
const Usuario = sequelize.import(path.join(__dirname, 'definitions/usuario'));
const Candidato = sequelize.import(path.join(__dirname, 'definitions/candidato'));
const Facultad = sequelize.import(path.join(__dirname, 'definitions/facultad'));
const Lugar = sequelize.import(path.join(__dirname, 'definitions/lugar'));
const Mesa = sequelize.import(path.join(__dirname, 'definitions/mesa'));
const Organo = sequelize.import(path.join(__dirname, 'definitions/organo'));
const Programa = sequelize.import(path.join(__dirname, 'definitions/programa'));
const Rol = sequelize.import(path.join(__dirname, 'definitions/rol'));
const StatusUser = sequelize.import(path.join(__dirname, 'definitions/statusUser'));
const TipoUsuario = sequelize.import(path.join(__dirname, 'definitions/tipoUsuario'));
const Voto = sequelize.import(path.join(__dirname, 'definitions/voto'));

//Relaciones
Usuario.belongsTo(Rol);
Rol.hasMany(Usuario);

Usuario.belongsTo(StatusUser);
StatusUser.hasMany(Usuario);

Usuario.belongsTo(TipoUsuario);
TipoUsuario.hasMany(Usuario);

Usuario.belongsTo(Programa);
Programa.hasMany(Usuario);

Programa.belongsTo(Facultad);
Facultad.hasMany(Programa);

Usuario.belongsTo(Mesa);
Mesa.hasMany(Usuario);

Mesa.belongsTo(Lugar);
Lugar.hasMany(Mesa);

Voto.belongsTo(Mesa);
Mesa.hasMany(Voto);

Voto.belongsTo(Candidato);
Candidato.hasMany(Voto);

Candidato.belongsTo(Organo);
Organo.hasMany(Candidato);


//sequelize.sync({force: true})
sequelize.sync();

exports.Usuario = Usuario;
exports.Voto = Voto;
exports.Facultad = Facultad;
exports.Programa = Programa;
exports.Candidato = Candidato;
exports.Mesa = Mesa;
exports.Lugar= Lugar;
exports.Rol = Rol;
exports.StatusUser = StatusUser;
exports.TipoUsuario = TipoUsuario;
exports.Organo = Organo;