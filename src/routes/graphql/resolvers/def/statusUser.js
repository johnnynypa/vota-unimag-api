const { StatusUser } = require('../../../../model');

module.exports = {
	Query:{
        statusUser(root, {id}){
            return (id) ? StatusUser.findById(id).then(dat => dat).catch(err => {throw new Error("Este estado de usuario no existe")}) : null;
        },
        statusUsers(){
            return StatusUser.findAll().then(dat => dat).catch(err => {throw new Error("Este estado de usuario no existe")});
        }
    },
    Mutation:{
        newStatusUser(root, {statusUserNew}){
            return StatusUser.findOrCreate({
                where:{
                    nombre: statusUserNew.nombre,
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Este estado de usuario ya existe")});
        }
    }
}