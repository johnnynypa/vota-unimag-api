module.exports = `
	type Rol{
		id: Int!
		nombre: String!
		descripcion: String
		
	}

	input newRol{
		nombre: String!
		descripcion: String
	}
`