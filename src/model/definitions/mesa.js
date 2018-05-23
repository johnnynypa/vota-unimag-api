module.exports = function(sequelize, dataType){
	return sequelize.define('mesa',{
		id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataType.INTEGER
        },
		numero: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"El numero de la mesa es necesario"
				},
			}
		},
	})
}
