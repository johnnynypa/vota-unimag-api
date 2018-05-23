const { Lugar } = require('../../../../model');

module.exports = {
	Query:{
        lugar(root, {id}){
            return (id) ? Lugar.findById(id).then(dat => dat).catch(err => {throw new Error("Este lugar no existe")}) : null;
        },
        lugares(){
            return Lugar.findAll().then(dat => dat).catch(err => {throw new Error("Este lugar no existe")});
        }
    },
    Mutation:{
        newLugar(root, {lugarNew}){
            return Lugar.findOrCreate({
                where:{
                    nombre: lugarNew.nombre,
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Este lugar ya existe")});
        }
    }
}