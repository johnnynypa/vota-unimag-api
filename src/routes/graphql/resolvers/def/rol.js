const { Rol } = require('../../../../model');

module.exports = {
	Query:{
        rol(root, {id}){
            return (id) ? Rol.findById(id).then(dat => dat).catch(err => {throw new Error("Este rol no existe")}) : null;
        },
        roles(){
            return Rol.findAll().then(dat => dat).catch(err => {throw new Error("Este rol no existe")});
        }
    },
    Mutation:{
        newRol(root, {rolNew}){
            return Rol.findOrCreate({
                where:{
                    nombre: rolNew.nombre,
                    descripcion: rolNew.descripcion
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Este rol ya existe")});
        }
    }
}