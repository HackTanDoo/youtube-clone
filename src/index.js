import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send("<div>HELLO!</div>");
}

app.get("/", handleHome);


const handleListening = () => console.log(`Server Listening on port ${PORT}`);

app.listen(PORT, handleListening)