module.exports = `
	type TipoUsuario{
		id: Int!
		nombre: String!
		descripcion: String
		
	}

	input newTipoUsuario{
		nombre: String!
		descripcion: String
	}
`