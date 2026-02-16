const express = require("express");
const app = express();

const PORT = 3003;

app.get("/", (req, res) => {
    res.send("Hiiiii! This is running from a server.");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running");
});