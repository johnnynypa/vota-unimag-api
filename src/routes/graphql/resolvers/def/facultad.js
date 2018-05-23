const { Facultad } = require('../../../../model');

module.exports = {
	Query:{
        facultad(root, {id}){
            return (id) ? Facultad.findById(id).then(dat => dat).catch(err => {throw new Error("Esta facultad no existe")}) : null;
        },
        facultades(){
            return Facultad.findAll().then(dat => dat).catch(err => {throw new Error("Esta facultad no existe")});
        }
    },
    Mutation:{
        newFacultad(root, {facultadNew}){
            return Facultad.findOrCreate({
                where:{
                    nombre: facultadNew.nombre,
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Esta facultad ya existe")});
        }
    }
}