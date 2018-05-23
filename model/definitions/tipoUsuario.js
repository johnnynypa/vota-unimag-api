module.exports = function(sequelize, dataType){
	return sequelize.define('tipoUsuario',{
		id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataType.INTEGER
        },
		descripcion: {
			type: dataType.STRING
		},
		nombre: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"El nombre del tipo de usuario es necesario"
				},
			}
		},
	})
}
