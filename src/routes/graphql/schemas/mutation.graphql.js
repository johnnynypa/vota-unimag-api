module.exports = `
	type Mutation{
		newUsuario		(user: newUsuario) : Usuario

		newRol			(rolNew: newRol)	: Rol

		newLugar			(lugarNew: newLugar)	: Lugar

		newMesa			(mesaNew: newMesa)	: Mesa

		newTipoUsuario	(tipoUsuarioNew : newTipoUsuario): TipoUsuario

		newFacultad	(facultadNew : newFacultad): Facultad

		newPrograma	(programaNew : newPrograma): Programa
	}
`
