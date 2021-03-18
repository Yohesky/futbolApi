const validateJWT = (req,res,next) => {
    //read token

    const token = req.header("Authorization")
    if(!token){
        return res.status(401).json({
            ok:false,
            msg: "Not token"
        })
    }

    try{
        req.uid = token
        next()
    }

    catch(err) {
        return res.status(401).json({
            ok:false,
            msg: "Token invalid"
        })
    }
}

module.exports = {
    validateJWT
}