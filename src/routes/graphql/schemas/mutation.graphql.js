module.exports = `
	type Mutation{
		newUsuario		(user: newUsuario) : Usuario
		deleteUsuario	(id: Int!)		:Boolean
		
		newRol			(rolNew: newRol)	: Rol

		newLugar		(lugarNew: newLugar)	: Lugar

		newMesa			(mesaNew: newMesa)	: Mesa

		newTipoUsuario	(tipoUsuarioNew : newTipoUsuario): TipoUsuario

		newFacultad	(facultadNew : newFacultad): Facultad

		newPrograma	(programaNew : newPrograma): Programa

		newOrgano (organoNew : newOrgano): Organo

		newStatusUser	(statusUserNew : newStatusUser): StatusUser

		newCandidato	(candidatoNew : newCandidato)	: Candidato

		newVoto			(votoNew : newVoto)	: Voto
	}
`
