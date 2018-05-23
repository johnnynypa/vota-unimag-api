const { Programa, Facultad } = require('../../../../model');

module.exports = {
	Query:{
        programa(root, {id}){
            return (id) ? Programa.findById(id,{
                include:[
                    {
                        model: Facultad,
                        required: true
                    }
                ]
            }).then(dat => dat).catch(err => {throw new Error("Este programa no existe")}) : null;
        },
        programas(root, {facultadId}){
            if(facultadId){
                return Programa.findAll({
                    where:{
                        facultadId: facultadId
                    },
                    include:[
                        {
                            model: Facultad,
                            required: true
                        }
                    ]
                }).then(dat => dat).catch(err => {throw new Error("Este programa no existe")});
            }else{
                return Programa.findAll({
                    include:[
                        {
                            model: Facultad,
                            required: true
                        }
                    ]
                }).then(dat => dat).catch(err => {throw new Error("Este programa no existe")});
            }
        }
    },
    Programa:{
        facultad({facultad}){
            return facultad.dataValues
        }
    },
    Mutation:{
        newPrograma(root, {programaNew}){
            return Programa.findOrCreate({
                where:{
                    nombre: programaNew.nombre,
                    facultadId: programaNew.facultadId
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Este programa ya existe")});
        }
    }
}