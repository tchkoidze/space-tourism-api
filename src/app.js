import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import destinationRouter from "./routes/destination-router.js";
import crewRouter from "./routes/crew-router.js";
import technologyRouter from "./routes/technology-router.js";
import cors from "cors";
import swaggerMiddleWare from "../middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connectToMongo();
app.use(cors());
app.use("/destination", express.static("./public/assets/destination"));
app.use("/crew", express.static("./public/assets/crew"));
app.use("/technology", express.static("public/assets/technology"));

app.use(bodyParser.json());

app.use("/api", destinationRouter);
app.use("/api", crewRouter);
app.use("/api", technologyRouter);
app.use("/", ...swaggerMiddleWare());

app.listen(process.env.PORT || 3333);
