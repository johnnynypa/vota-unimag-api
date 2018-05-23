const { Organo } = require('../../../../model');

module.exports = {
	Query:{
        organo(root, {id}){
            return (id) ? Organo.findById(id).then(dat => dat).catch(err => {throw new Error("Este organo no existe")}) : null;
        },
        organos(){
            return Organo.findAll().then(dat => dat).catch(err => {throw new Error("Este organo no existe")});
        }
    },
    Mutation:{
        newOrgano(root, {organoNew}){
            return Organo.findOrCreate({
                where:{
                    nombre: organoNew.nombre,
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Este organo ya existe")});
        }
    }
}