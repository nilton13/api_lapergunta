const jwt = require('jsonwebtoken');
const secret = "07b2dabf885ce05a808ae8eb55363dde";


module.exports = function(req,res,next){
    const authToken = req.headers['authorization'];

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        var token = bearer[1];

        var decoded = jwt.verify(token, secret);

        console.log(decoded);

        next();
    }else{
        res.json({ Error: "É preciso fazer o login primeiro!" });
    }
}