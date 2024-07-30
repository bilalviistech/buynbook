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

    static async GetAllUser (req, res)  {
        try {
            const PageNumber = req.query.page || 1;
            const PageLimitData = 10;
    
            const AllUser = await User.paginate({ page: PageNumber, limit: PageLimitData })
    
            res.status(200).json({
                success: true,
                data: AllUser
            })
        } catch (error) {
            res.status(200).json({
                success: false,
                message: error.message
            })
        }
    }
}


module.exports = UserController;