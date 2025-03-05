const User = require("../models/UserModel");
const bycript = require('bcrypt')

const createUser = async(req,res)=>{
    const {name,
        email,
        userpassword,
        role} = req.body
    try {
        if(!email|| !name || !userpassword ){
            res.status(401).send("Empty fileds")
            return
        }

        let haspassword =  bycript.hashSync(userpassword, 10);
        const user = User.create({
            name:name,
            email: email,
            password: haspassword,
            role:role

        })

        res.status(200).send("User is Sucessfully created")

        
    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")

        
    }
}


const getUser = async (req,res) =>{
    const {id} = req.params
    try {
        const getUser =  await User.findOne({_id:id})

        res.status(200).send(getUser)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
    }
}


const UpdateUser = async(req,res) =>{
    const body = req.body
    const {id} = req.params
    try {
      const updateUser = await User.updateOne({_id:id},
        { $set: body }
      )

      res.status(200).send(updateUser)
        
    } catch (error) {
        res.status(200).send("Server Error")
        
    }
}

const deleteUser = async(req,res) =>{
    try {
        const deleteUser = await User.deleteOne({_id:id})

        res.status(200).send("User is deleted Sucessfully")
    } catch (error) {
        res.status(500).send("Server Error")
        
    }
}


module.exports = {createUser,getUser,deleteUser,UpdateUser}