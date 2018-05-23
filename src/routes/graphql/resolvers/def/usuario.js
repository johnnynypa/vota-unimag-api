const { Usuario } = require('../../../../model')
const { hashPassword } = require('../../../../utils')

module.exports = {
	Query:{
		usuario(root, {id, dni}){
			if(id){
				return Usuario.findById(id)
				.then( dat => dat)
				.catch( err => {throw new Error(err)})
			}else{
				if(dni){
					return Usuario.find({
						where:{
							dni: dni
						}
					})
					.then( dat => dat)
					.catch( err => {throw new Error(err)})
				}else{
					return null
				}
			}
		}
	},
	Usuario:{

	},
	Mutation:{
		newUsuario(root, {user}){
			//La contraseña inicial es el dni, cifrada
			return hashPassword(user.dni).then(pswEncrypted => {
				//La cuenta es nombre-dni
				user.cuenta = `${user.nombre}-${user.dni}`
				user.contra = pswEncrypted
				return Usuario.find({
					where:{
						dni: user.dni
					}
				}).then( dat => {
					if (dat)
						throw new Error("Esta cedula ya se encuentra registrada")
					else{
						return Usuario.create(user)
						.then( dat => dat)
						.catch( err => {throw new Error(err)})
					}
				})
				.catch( err => {throw new Error(err)})
			}).catch( err => {throw new Error(err)})

		}
	}
}
