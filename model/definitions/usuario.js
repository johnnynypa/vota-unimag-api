module.exports = function(sequelize, dataType){
	return sequelize.define('usuario',{
		id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataType.INTEGER
        },
		codigo: {
			allowNull: false,
			type: dataType.STRING,
			isUnique: true,
			validate:{
				notEmpty: {
					msg:"La cuenta del usuario es super necesaria"
				},
			}
		},
		password: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"La contraseña del usuario es necesaria"
				},
			}
		},
		email: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"El correo de la institucion es necesaria"
				},
				isEmail: {
					msg: "No es un email valido"
				}
			}
		},
		dni: {
			allowNull: false,
			type: dataType.STRING
		},
		nombre: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"El nombre del usuario es necesario"
				},
			}
		},
		nombre2: dataType.STRING,
		apellido: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"El primer apellido del usuario es necesario"
				},
			}
		},
		apellido2: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"El segundo apellido del usuario es necesario"
				},
			}
		},
		telefono: {
			allowNull: false,
			type: dataType.STRING,
			validate:{
				notEmpty: {
					msg:"El telefono del usuario es necesario"
				},
			}
		}
		sexo: {
			allowNull: false,
			type: dataType.ENUM('Femenino', 'Masculino') 
		}
	})
}
