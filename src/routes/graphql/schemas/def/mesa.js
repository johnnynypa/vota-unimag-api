module.exports = `
	type Mesa{
		id: Int!
		numero: String!
		lugar: Lugar!
		habilitada: Boolean!
	}

	input newMesa{
		numero: String!
		lugarId: Int!
	}
`