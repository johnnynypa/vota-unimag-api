module.exports = function(sequelize, dataType){
	return sequelize.define('lugar',{
		id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataType.INTEGER
        },
		nombre: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"El nombre del lugar es necesario"
				},
			}
		},
	})
}
