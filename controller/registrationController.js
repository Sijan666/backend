const User = require('../model/usermodel')

const registrationController = async (req,res)=>{
    const { username , email , pass} = req.body

    const existingEmail = await User.findOne({email:email})
    
    if (existingEmail) {
        return res.send('user already exist')
    }

    const user = new User({
        username : username,
        email : email , 
        pass : pass
    })

    user.save()
    res.send(user)
}

const allUserController = async (req,res) => {
    const allUser = await User.find({})
    res.send(allUser)
}

module.exports = {registrationController , allUserController}

// CRUD 
// C = Create
// R = Read
// U = Update
// D = Delete