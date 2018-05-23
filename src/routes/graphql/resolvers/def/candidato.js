const { Candidato, Organo } = require('../../../../model');

module.exports = {
	Query:{
        candidato(root, {id}){
            return (id) ? Candidato.findById(id,{
                include:[
                    {
                        model: Organo,
                        required: true
                    }
                ]
            }).then(dat => dat).catch(err => {throw new Error("Este candidato no existe")}) : null;
        },
        candidatos(root, {organoId}){
            if(organoId){
                return Candidato.findAll({
                    where:{
                        organoId: organoId
                    },
                    include:[
                        {
                            model: Organo,
                            required: true
                        }
                    ]
                }).then(dat => dat).catch(err => {throw new Error("Este candidato no existe")});    
            }else{
                return Candidato.findAll({
                    include:[
                        {
                            model: Organo,
                            required: true
                        }
                    ]
                }).then(dat => dat).catch(err => {throw new Error("Este candidato no existe")});
            }
        }
    },
    Candidato:{
        organo({organo}){
            return organo.dataValues
        }
    },
    Mutation:{
        newCandidato(root, {candidatoNew}){
            return Candidato.findOrCreate({
                where:{
                    numero: candidatoNew.numero,
                    nombre: candidatoNew.nombre,
                    foto: candidatoNew.foto,
                    organoId: candidatoNew.organoId
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Este candidato ya existe")});
        }
    }
}