
const mongoose = require('mongoose');

const uri = "mongodb+srv://ankit1602121007:FDfUTe4a42j6Gm6p@cluster0.f71lwn2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



 // Change 'my_database' to your actual database name
const run = () =>{
    try {
        mongoose.connect(uri,)
        .then(() => console.log('MongoDB Connected ✅'))
        
    } catch (error) {
        console.log(error)
        
    }
}




module.exports = { run };
