const { Voto, Candidato, Mesa } = require('../../../../model');

module.exports = {
	Query:{
        voto(root, {id}){
            return (id) ? Voto.findById(id,{
                include:[
                    {
                        model: Candidato,
                        required: true
                    },
                    {
                        model: Mesa,
                        required: true
                    }
                ]
            }).then(dat => dat).catch(err => {throw new Error("Este voto no existe")}) : null;
        },
        votos(root, {candidatoId, mesaId}){
            if(candidatoId && mesaId){
                return Voto.findAll({
                    where:{
                        candidatoId: candidatoId,
                        mesaId: mesaId
                    },
                    include:[
                        {
                            model: Candidato,
                            required: true
                        },
                        {
                            model: Mesa,
                            required: true
                        }
                    ]
                }).then(dat => dat).catch(err => {throw new Error("Este voto no existe")});    
            }else{
                if(candidatoId){
                    return Voto.findAll({
                        where:{
                            candidatoId: candidatoId,
                        },
                        include:[
                            {
                                model: Candidato,
                                required: true
                            },
                            {
                                model: Mesa,
                                required: true
                            }
                        ]
                    }).then(dat => dat).catch(err => {throw new Error("Este voto no existe")});    
                }else{
                    if(mesaId){
                        return Voto.findAll({
                            where:{
                                mesaId: mesaId
                            },
                            include:[
                                {
                                    model: Candidato,
                                    required: true
                                },
                                {
                                    model: Mesa,
                                    required: true
                                }
                            ]
                        }).then(dat => dat).catch(err => {throw new Error("Este voto no existe")});    
                    }else{
                        return Voto.findAll({
                            include:[
                                {
                                    model: Candidato,
                                    required: true
                                },
                                {
                                    model: Mesa,
                                    required: true
                                }
                            ]
                        }).then(dat => dat).catch(err => {throw new Error("Este voto no existe")});
                    }
                }
            }
        }
    },
    Voto:{
        candidato({candidato}){
            return candidato.dataValues;
        },
        mesa({mesa}){
            return mesa.dataValues;
        }
    },
    Mutation:{
        newVoto(root, {votoNew}){
            return Voto.create({
                mesaId: votoNew.mesaId,
                candidatoId: votoNew.candidatoId
            }).then( dat => {
                return dat;
            }).catch(err => {throw new Error("Este voto ya existe")});
        }
    }
}