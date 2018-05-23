module.exports = `
	type Query{
		usuario			(id: Int, dni: String)		: Usuario

		docente			(id: Int!)		: Docente
		docentes		(idInstitucion:Int!, idUsuario:Int, dni: String)				: [Docente]

		institucion		(id:Int!)		:Institucion
		instituciones	(idMunicipio:Int) : [Institucion]

		departamento		(id: Int!)		: Departamento
		departamentos						: [Departamento]

		municipio		(id: Int!)			: Municipio
		municipios		(idDepartamento: Int)			: [Municipio]

		administrador	(id: Int!)	: Administrativo
		administradores	(idInstitucion:Int, idUsuario:Int)	: [Administrativo]

		grado		(id:Int!) : Grado
		grados		:[Grado]

		curso		(id:Int!) : Curso
		cursos		(idGrado:Int, idInstitucion: Int, idDocente:Int)	:[Curso]

		area		(id: Int!)	: Area
		areas		: [Area]

		asignatura	(id: Int!)	:Asignatura
		asignaturas	(idCurso: Int, idArea:Int, idDocente:Int, idInstitucion:Int)	: [Asignatura]

		periodo		(id:Int!)	: Periodo
		periodos	(idInstitucion:Int!) : [Periodo]

		acudiente	(id:Int, idUsuario:Int, cc:String)	: Acudiente

		estudiante	(idUsuario: Int!, id:Int)	: Estudiante
		estudiantes	(idCurso:Int, idInstitucion: Int, idAcudiente:Int)	: [Estudiante]
	}
`;
