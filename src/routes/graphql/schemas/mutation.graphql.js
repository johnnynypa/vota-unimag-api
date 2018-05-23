module.exports = `
	type Mutation{
		newUsuario		(user: newUsuario) : Usuario

		newDocente		(idUsuario: Int, idInstitucion:Int) : Docente

		newInstitucion	(inst: newInstitucion): Institucion

		newDepartamento (nombre: String) : Departamento

		newMunicipio	(nombre:String, idDepartamento:Int) : Municipio

		newAdministrativo	(idUsuario: Int, idInstitucion:Int)	: Administrativo

		newGrado (nuevo: newGrado) : Grado

		newCurso (nuevo: newCurso) : Curso
		updateCurso (id: Int!, capacidad: Int!, idDocente:Int!) : Curso
		deleteCurso (idGrado: Int!) : Boolean

		newArea (nuevo: newArea) : Area

		newAsignatura	(nuevo: newAsignatura) : Asignatura

		newPeriodo	(nuevo: newPeriodo)	: Periodo

		newAcudiente	(idUsuario: Int!)	: Acudiente

		newEstudiante	(nuevo: newEstudiante!)	:	Estudiante
	}
`
