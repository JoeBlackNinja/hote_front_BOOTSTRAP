const jwt = require('jsonwebtoken');

const tokenGenerator = (userData) => {
    return jwt.sign({userData}, 'Improving', {
        expiresIn : 10000
    })
} 

module.exports = tokenGenerator;