module.exports = `
	type Programa{
		id: Int!
		nombre: String!
		facultad: Facultad
	}

	input newPrograma{
		nombre: String!
		facultadId: Int!
	}
`