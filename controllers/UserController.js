const User = require('../models/UserModal.js')


class UserController {
    static async getUserById (req, res){
        const {UserId} = req.body

        const userData = await User.findById(UserId)

        if(userData){
            res.send({
                "status": true,
                "data": userData
            })
        }else{
            res.send({
                "status": false,
                "data": "User not found"
            })
        }
    }
}


module.exports = UserController;