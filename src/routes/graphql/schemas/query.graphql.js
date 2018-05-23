module.exports = `
	type Query{
		usuario			(id: Int, dni: String, codigo: String)		: Usuario
		usuarios		(mesaId: Int, programaId: Int, statusUserId: Int, tipoUsuarioId: Int, rolId: Int,)	:[Usuario]

		rol				(id:Int!) 	: Rol
		roles						: [Rol]

		lugar				(id:Int!) 	: Lugar
		lugares						: [Lugar]
	}
`;
