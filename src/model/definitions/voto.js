module.exports = function(sequelize, dataType){
	return sequelize.define('voto',{
		id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataType.INTEGER
        }
    })
}
