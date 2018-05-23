module.exports = `
	type Query{
		usuario			(id: Int, dni: String, codigo: String)		: Usuario
		usuarios		(mesaId: Int, programaId: Int, statusUserId: Int, tipoUsuarioId: Int, rolId: Int,)	:[Usuario]

		rol				(id:Int!) 	: Rol
		roles						: [Rol]

		lugar				(id:Int!) 	: Lugar
		lugares						: [Lugar]

		mesa				(id:Int!) 	: Mesa
		mesas				(lugarId: Int)		: [Mesa]

		tipoUsuario			(id:Int)	: TipoUsuario
		tipoUsuarios					: [TipoUsuario]

		facultad			(id:Int)	: Facultad
		facultades					: [Facultad]

		programa			(id:Int)				: Programa
		programas			(facultadId: Int)		: [Programa]
	}
`;
