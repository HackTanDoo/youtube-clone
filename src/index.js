import express from "express";
import logger from "morgan";


const PORT = 4000;
const app = express();

const devLogger = logger("dev");


app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views/");
app.use(devLogger);
app.use("/". globalRouter);
app.use("/users". userRouter);
app.use("/videos". videoRouter);



const handleListening = () => console.log(`Server Listening on port ${PORT}`);

app.listen(PORT, handleListening)