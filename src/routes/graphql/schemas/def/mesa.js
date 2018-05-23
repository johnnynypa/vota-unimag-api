module.exports = `
	type Mesa{
		id: Int!
		numero: String!
		lugar: Lugar!
	}

	input newMesa{
		numero: String!
		lugarId: Int!
	}
`