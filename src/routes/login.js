const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('dos-config');
const User = require('../model').Usuario;


let router = express.Router();

//Login Middleware
router.post('/', (req, res) => {
	const { dni, password } = req.body;
    verificarCredenciales(dni, password)
    .then(data =>{
		if(!data){
			return res.json({error: "Credenciales incorrectas"});
		}
		console.log(`Login request with dni: ${dni} and password ${password}`);
		//Si las credenciales son validas;


		const token = jwt.sign({
            id : data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            apellido2: data.apellido2,
            codigo: data.codigo,
            dni: data.dni,
            rolId: data.rolId,
            statusUserId: data.statusUserId,
            tipoUsuarioId: data.tipoUsuarioId,
            programaId: data.programaId,
            mesaId: data.mesaId
        },
            config.jwtSecret
        );
        return res.json(token);
    })
    .catch(err => {
        //Error en el server.
        console.error(err);
        return res.json({error: "Credenciales incorrectas"});
	});
});

/**
 * @function verificarCredenciales
 * @param us : String {Nombre de usuario}
 * @param psw : String {Contraseña}
 * @return Promise(resolve{Bool})
 * */
function verificarCredenciales(dni, psw){
    return new Promise( (resolve, reject) =>{
		User.findOne({
			where: {
				dni: dni
			}
		})
		.then( dat => {
			if(dat){
				comparePsw(psw, dat.contra)
				.then( response => {
					if(response){
						resolve(dat)
					}else{
						resolve(false)
					}
				})
				.catch( err => {
					console.error(err);
					reject({error: "Ha ocurrido un error, intentelo mas tarde"});
				})
			}else{
				resolve(false)
			}
		})
		.catch( errorE => {
			console.error(errorE);
			reject({error: "Ha ocurrido un error, intentelo mas tarde"});
		})
    });
}

function comparePsw(pswIn, pswUser){
	return new Promise( (resolve, reject) => {
		bcrypt.compare(pswIn, pswUser, function(err, res){
            if(res == false){
				return resolve(false);
			}else{
                return resolve(true);
            }
        });
	})
}


module.exports = router;