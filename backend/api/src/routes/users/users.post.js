const usersController = require("@controllers/users.controller");
function postCreateUser(req, res) {
    console.log("receiving user data...");
    const userData = req.body;    
    const userResponse = usersController.createNewUser(userData);
    res.send(userResponse)
}

module.exports = [
    {
        path: "/users",
        method: "post",
        handler: postCreateUser
    }
];