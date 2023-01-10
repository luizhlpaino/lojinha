function Authenticate(req, res, next) {
    console.log(`before anything, you should authenticate...`);
    next();
}

module.exports = {
    Authenticate
}