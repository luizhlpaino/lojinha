const usersService = require("@services/users.service");

function createNewUser(userData) {
    console.log("validating user data...");
    usersService.insertNewUser(userData);

    return { 
        success:true, 
        data: userData 
    };
}

module.exports = {
    createNewUser
}