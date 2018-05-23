const bcrypt = require('bcrypt')
const salNumHash = 10;

exports.hashPassword = (psw) => {
    return bcrypt.hash(psw, salNumHash)
}