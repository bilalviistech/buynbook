const mongoose = require('mongoose'); // include mongodb package


const UserModal = mongoose.Schema({

    name:{
        type: String,
        require: true, 
    },
    email:{
        type: String,
        require: true,
        unique: [true, "Email id already exists"],
    },
    isOnline: {
        type : Boolean,
    },
    password:{
        type: String,
        require: true
    },
    Phone:{
        type: String,
        require: true
    },
    Profile_Picture:  {
        type: String,
        require: false

    },
    city: String,
    socketId: String,
    InstallemtProvider: Boolean
    
},{timestamps: true})

const User = mongoose.model('User', UserModal);

module.exports  =  User;