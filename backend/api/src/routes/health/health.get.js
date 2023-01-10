function getAPIHealthCheck(req, res) {
    res.send({ success: true });
}

module.exports = [
    {
        path: "/health",
        method: "get",
        handler: getAPIHealthCheck
    }
];