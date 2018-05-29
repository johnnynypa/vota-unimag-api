const { Usuario, Mesa, Rol, TipoUsuario, StatusUser, Programa, Lugar } = require('../../../../model');
const { hashPassword } = require('../../../../utils');

module.exports = {
	Query:{
		usuario(root, {id, dni, codigo}){
			if(id){
				return Usuario.findById(id,{
					include:[
						{
							model: Mesa,
							required: true
						},
						{
							model: Programa,
							required: true
						},
						{
							model: StatusUser,
							required: true
						},
						{
							model: TipoUsuario,
							required: true
						},
						{
							model: Rol,
							required: true
						}
					]
				})
				.then( dat => dat)
				.catch( err => {throw new Error(err)})
			}else{
				if(dni){
					return Usuario.find({
						where:{
							dni: dni
						},
						include:[
							{
								model: Mesa,
								required: true
							},
							{
								model: Programa,
								required: true
							},
							{
								model: StatusUser,
								required: true
							},
							{
								model: TipoUsuario,
								required: true
							},
							{
								model: Rol,
								required: true
							}
						]
					})
					.then( dat => dat)
					.catch( err => {throw new Error(err)});
				}else{
					if(codigo){
						return Usuario.find({
							where:{
								codigo: codigo
							},
							include:[
								{
									model: Mesa,
									required: true
								},
								{
									model: Programa,
									required: true
								},
								{
									model: StatusUser,
									required: true
								},
								{
									model: TipoUsuario,
									required: true
								},
								{
									model: Rol,
									required: true
								}
							]
						})
						.then( dat => dat)
						.catch( err => {throw new Error(err)})
					}else{
						return null
					}
				}
			}
		},
		usuarios(root, {mesaId, programaId, rolId, statusUserId, tipoUsuarioId}){
			if(mesaId){
				return Usuario.findAll({
					where:{
						mesaId: mesaId
					},
					include:[
						{
							model: Programa,
							required: true
						},
						{
							model: StatusUser,
							required: true
						},
						{
							model: TipoUsuario,
							required: true
						},
						{
							model: Rol,
							required: true
						}
					]
				})
				.then( dat => dat)
				.catch( err => {throw new Error(err)})
			}else{
				if(programaId){
					return Usuario.findAll({
						where:{
							programaId: programaId
						},
						include:[
							{
								model: Mesa,
								required: true
							},
							{
								model: StatusUser,
								required: true
							},
							{
								model: TipoUsuario,
								required: true
							},
							{
								model: Rol,
								required: true
							}
						]
					})
					.then( dat => dat)
					.catch( err => {throw new Error(err)})
				}else{
					if(statusUserId){
						return Usuario.findAll({
							where:{
								statusUserId: statusUserId
							},
							include:[
								{
									model: Mesa,
									required: true
								},
								{
									model: Programa,
									required: true
								},
								{
									model: TipoUsuario,
									required: true
								},
								{
									model: Rol,
									required: true
								}
							]
						})
						.then( dat => dat)
						.catch( err => {throw new Error(err)})
					}else{
						if(rolId){
							return Usuario.findAll({
								where:{
									rolId: rolId
								},
								include:[
									{
										model: Mesa,
										required: true
									},
									{
										model: StatusUser,
										required: true
									},
									{
										model: TipoUsuario,
										required: true
									},
									{
										model: Programa,
										required: true
									}
								]
							})
							.then( dat => dat)
							.catch( err => {throw new Error(err)})
						}else{
							if(tipoUsuarioId){
								return Usuario.findAll({
									where:{
										tipoUsuarioId: tipoUsuarioId
									},
									include:[
										{
											model: Mesa,
											required: true
										},
										{
											model: StatusUser,
											required: true
										},
										{
											model: Rol,
											required: true
										},
										{
											model: Programa,
											required: true
										}
									]
								})
								.then( dat => dat)
								.catch( err => {throw new Error(err)})
							}else{
								return Usuario.findAll({
									include:[
										{
											model: TipoUsuario,
											required: true
										},
										{
											model: Mesa,
											required: true
										},
										{
											model: StatusUser,
											required: true
										},
										{
											model: Rol,
											required: true
										},
										{
											model: Programa,
											required: true
										}
									]
								})
								.then( dat => dat)
								.catch( err => {throw new Error(err)})
							}
						}
					}
				}
			}
		}
	},
	Usuario:{
		mesa({mesa}){
			return Mesa.findById(mesa.dataValues.id,{
				include:[
					{
						model: Lugar,
						required: true
					}
				]
			}).then( dat => dat)
			.catch( err => {throw new Error(err)})
		},
		programa({programa}){
			return programa.dataValues;
		},
		rol({rol}){
			return rol.dataValues;
		},
		statusUser({statusUser}){
			return statusUser.dataValues;
		},
		tipoUsuario({tipoUsuario}){
			return tipoUsuario.dataValues;
		},
	},
	Mutation:{
		newUsuario(root, {user}){
			//La contraseña inicial es el dni, cifrada
			return hashPassword(user.dni).then(pswEncrypted => {

				//La cuenta es dni
				user.password = pswEncrypted;
				return Usuario.find({
					where:{
						dni: user.dni
					}
				}).then( dat => {
					if (dat)
						throw new Error("Esta cedula ya se encuentra registrada");
					else{
						return Usuario.find({
							where:{
								codigo: user.codigo
							}
						}).then(dat => {
							if(!dat){
								return Usuario.create(user)
								.then( dat => dat)
								.catch( err => {throw new Error(err)})
							}else{
								throw new Error("Esta codigo ya se encuentra registrado")
							}
						})
					}
				})
				.catch( err => {throw new Error(err)})
			}).catch( err => {throw new Error(err)})
		},
		deleteUsuario(root, {id}){
			return Usuario.destroy({
				where:{
					id: id
				}
			}).then( () => {
				return true;
			})
			.catch( err => {throw new Error(err)});
		},
		autorizarUsuario(root, {id}){
			return Usuario.update({
				statusUserId: 2
			},{
				where:{
					id: id
				}
			}).then( dat => true)
			.catch( err => {throw new Error(err)});
		},
		usuarioVotado(root, {id}){
			return Usuario.update({
				statusUserId: 3
			},{
				where:{
					id: id
				}
			}).then( dat => true)
			.catch( err => {throw new Error(err)});
		}
	}
}
