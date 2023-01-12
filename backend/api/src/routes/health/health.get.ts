import { LojinhaRoute } from "../../models/LojinhaRoute.model";

function getAPIHealthCheck(req, res) {
    res.send({ success: true });
}

export default [
    new LojinhaRoute("/health", "get", getAPIHealthCheck)    
];