module.exports = `
	type Usuario{
		id: Int!
		codigo: String!
		nombre: String!
		nombre2: String
		apellido: String!
		apellido2: String!
		dni: String!
		email: String!
		telefono: String
		sexo: String!
		rol: Rol!
		tipoUsuario: TipoUsuario!
		statusUser: StatusUser!
		programa: Programa!
		mesa: Mesa!
	}

	input newUsuario{
		codigo: String!
		nombre: String!
		nombre2: String
		apellido: String!
		apellido2: String
		dni: String!
		email: String!
		telefono: String
		sexo: String!
		rolId: Int!
		tipoUsuarioId: Int!
		statusUserId: Int!
		programaId: Int!
		mesaId: Int!
	}
`
