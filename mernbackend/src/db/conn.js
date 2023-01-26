const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

//mongoose.connect(process.env.MONGO_URL);
// mongodb+srv://investingoals:<password>@cluster0.yvoejwv.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://investingoals:DevDhruvAyush@cluster0.yvoejwv.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true  
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log('no connection');
})

                                                                                                                                                                                                                                                