const bankMiddlewares = (req,res,next)=>{
    let password = "12345"
    let pass = req.headers.authorization

    if (password === pass) {
        next()
    }
    else{
        res.send('wrong password')
    }
}

module.exports = bankMiddlewares