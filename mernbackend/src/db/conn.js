const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://investingoals:DevDhruvAyush@cluster0.yvoejwv.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true  
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log('no connection');
})

                                                                                                                                                                                                                                                