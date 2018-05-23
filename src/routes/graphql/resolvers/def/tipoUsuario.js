const { TipoUsuario } = require('../../../../model');

module.exports = {
	Query:{
        tipoUsuario(root, {id}){
            return (id) ? TipoUsuario.findById(id).then(dat => dat).catch(err => {throw new Error("Este tipo de usuario no existe")}) : null;
        },
        tipoUsuarios(){
            return TipoUsuario.findAll().then(dat => dat).catch(err => {throw new Error("Este tipo de usuario no existe")});
        }
    },
    Mutation:{
        newTipoUsuario(root, {tipoUsuarioNew}){
            return TipoUsuario.findOrCreate({
                where:{
                    nombre: tipoUsuarioNew.nombre,
                    descripcion: tipoUsuarioNew.descripcion
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Este tipo de usuario ya existe")});
        }
    }
}