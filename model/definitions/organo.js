module.exports = function(sequelize, dataType){
	return sequelize.define('organo',{
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
					msg:"El nombre del organo es necesario"
				},
			}
		},
	})
}
