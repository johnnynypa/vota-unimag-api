module.exports = `
	type Organo{
		id: Int!
        numero: String!
        lugar: Lugar!
	}

	input newOrgano{
        numero: String!
        lugarId: Int!
	}
`