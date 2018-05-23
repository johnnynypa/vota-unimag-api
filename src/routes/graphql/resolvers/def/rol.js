const { Rol } = require('../../../../model');

module.exports = {
	Query:{
        rol(root, {id}){
            return (id) ? Rol.findById(id).then(dat => dat).catch(err => {throw new Error("Este rol no existe")}) : null;
        },
        roles(){
            return Rol.findAll().then(dat => dat).catch(err => {throw new Error("Este rol no existe")});
        }
    }
}