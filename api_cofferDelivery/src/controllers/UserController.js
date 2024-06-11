const User = require("../models/User");


const UserControllers = {
    async index(req, res) {
        const {id} = req.params;
        const user = await User.findByPk(id);
    }
}