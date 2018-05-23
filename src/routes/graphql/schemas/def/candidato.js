module.exports = `
	type Candidato{
		id: Int!
		nombre: String!
		numero: String!
		foto: String!
		organo: Organo!
	}

	input newCandidato{
		nombre: String!
		numero: String!
		foto: String!
		organoId: Int
	}
`