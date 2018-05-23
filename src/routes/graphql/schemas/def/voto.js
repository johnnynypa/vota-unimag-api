module.exports = `
	type Candidato{
		id: Int!
		candidato: Candidato!
		mesa: Mesa!
	}

	input newCandidato{
		candidatoId: Int!
		mesaId: Int!
	}
`