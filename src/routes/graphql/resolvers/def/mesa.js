const { Mesa, Lugar } = require('../../../../model');

module.exports = {
	Query:{
        mesa(root, {id}){
            return (id) ? Mesa.findById(id,{
                include:[
                    {
                        model: Lugar,
                        required: true
                    }
                ]
            }).then(dat => dat).catch(err => {throw new Error("Esta mesa no existe")}) : null;
        },
        mesas(root, {lugarId}){
            if(lugarId){
                return Mesa.findAll({
                    where:{
                        lugarId: lugarId
                    },
                    include:[
                        {
                            model: Lugar,
                            required: true
                        }
                    ]
                }).then(dat => dat).catch(err => {throw new Error("Esta mesa no existe")});    
            }else{
                return Mesa.findAll({
                    include:[
                        {
                            model: Lugar,
                            required: true
                        }
                    ]
                }).then(dat => dat).catch(err => {throw new Error("Esta mesa no existe")});
            }
        }
    },
    Mesa:{
        lugar({lugar}){
            return lugar.dataValues
        }
    },
    Mutation:{
        newMesa(root, {mesaNew}){
            return Mesa.findOrCreate({
                where:{
                    numero: mesaNew.numero,
                    lugarId: mesaNew.lugarId
                }
            }).spread( dat => {
                return dat;
            }).catch(err => {throw new Error("Esta mesa ya existe")});
        }
    }
}