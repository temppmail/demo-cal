const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Calculator API is running");
});

app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b });
});

app.post("/subtract", (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a - b });
});

app.post("/multiply", (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a * b });
});

app.post("/divide", (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }
    res.json({ result: a / b });
});

// ❌ DO NOT use app.listen
module.exports = app;
