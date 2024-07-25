const mongoose = require('mongoose'); // include mongodb package

const Connect_DB = () => {

    mongoose.set('strictQuery', true);
    mongoose.connect('mongodb+srv://hamza:hamza@cluster0.lxgwi0a.mongodb.net/');
    const db = mongoose.connection;
    db.on("error",(error)=>console.log(error));
    db.once("open",()=>console.log("DB Connected"));
}


module.exports = Connect_DB