function postAPIHealthCheck(req, res) {
    const payload = req.body;
    res.send(payload);
}

module.exports = [
    {
        path: "/health",
        method: "post",
        handler: postAPIHealthCheck,
    }
]