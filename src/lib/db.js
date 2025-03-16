
const mongoose = require('mongoose');

const uri = "";



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
