const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/authors',{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>console.log("Database connection established"))
.catch(err=>console.log("There was an error",err))