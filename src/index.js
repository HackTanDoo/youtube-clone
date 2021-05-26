import express from "express";
import logger from "morgan";


const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send("<div>HELLO!</div>");
}

const devLogger = logger("dev");

app.use(devLogger);
app.get("/", handleHome);


const handleListening = () => console.log(`Server Listening on port ${PORT}`);

app.listen(PORT, handleListening)