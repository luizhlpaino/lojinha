import { LojinhaRoute } from "@routes";

function getHealth(req, res) {
    res.send({ success: true });    
};

export default [
    new LojinhaRoute("/health", "get", getHealth)
];