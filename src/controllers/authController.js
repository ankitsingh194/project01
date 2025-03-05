const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/UserModel')


const LoginUser = async(req,res) =>{
    try {
        const {email,password} = req.body

        

        const options = {
            expiresIn: '1h' 
          };

        const user =  await User.findOne({email:email})
        console.log(user.password)

        const match = await bcrypt.compare(password, user.password);

  
        if(match == false){
            res.status(401).send("wrong email or password")
            return
        }
        // but secret key in env file 
        const token = jwt.sign({user},"sowskge[gpcPAKBBS]G[ELF['lsgk",options)

        res.cookie(token)
        res.status(200).send(user)




        
    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
        
    }
}


module.exports ={ LoginUser}