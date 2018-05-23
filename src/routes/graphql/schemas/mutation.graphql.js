module.exports = `
	type Mutation{
		newUsuario		(user: newUsuario) : Usuario

		newRol			(rolNew: newRol)	: Rol

		newLugar			(lugarNew: newLugar)	: Lugar
	}
`
