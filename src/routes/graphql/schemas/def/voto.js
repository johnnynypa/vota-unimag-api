module.exports = `
	type Voto{
		id: Int!
		candidato: Candidato!
		mesa: Mesa!
	}

	input newVoto{
		candidatoId: Int!
		mesaId: Int!
	}
`