const jwt = require('jsonwebtoken')


const verifytoken = async(req,res,next) =>{
    try {
        let token ;

        if (req.cookies && typeof req.cookies === "object") {
            token = Object.keys(req.cookies)[0]; 
        } else if (req.headers.authorization) {
            token = req.headers.authorization.split(" ")[1]; 
        }

     
        if (!token) {
            return res.status(401).json({ message: "Unauthorized! No token provided." });
        }
        
          

          const verify = jwt.verify(token,"sowskge[gpcPAKBBS]G[ELF['lsgk")

          if(!verify?.user?.name){
            res.status(401).send("token error")
           return
          }
          
          next()
            
    
        

        
    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
        
    }
}

module.exports= verifytoken