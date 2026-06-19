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

const deleteUser = async (req,res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.send('user deleted')
}

const updateController = async (req,res) => {
    const {id} = req.params
    let data = await User.findByIdAndUpdate({_id:id} , req.body)
    res.send('data updated')
}

// practice
// const registration = async (req,res) => {
//     const {username , email , pass} = req.body
//     const existing = await User.findOne({email:email})

//     if (existing) {
//         return res.send('User already exist')
//     }

//     const user = new User({
//         username : username,
//         email : email,
//         pass : pass
//     })

//     user.save()
//     res.send(user)
// }

// const allUser = async (req,res) => {
//     const alluser = await User.find({})
//     res.send(alluser)
// }

// const deleteUser = async (req,res) => {
//     const {id} = req.params
//     await User.findOneAndDelete(id)
//     res.send('user deleted')
// }

// const updateUser = async (req,res) => {
//     const {id} = req.params
//     let data = await User.findByIdAndUpdate({_id:id})
//     res.send('data updated')
// }

module.exports = {registrationController , allUserController , deleteUser , updateController}

// CRUD 
// C = Create
// R = Read
// U = Update
// D = Delete