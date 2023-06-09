import express from "express";
import { getAllCrew } from "../controllers/crew-controller.js";

const crewRouter = express.Router();

crewRouter.get("/crew", getAllCrew);

console.log(getAllCrew);
export default crewRouter;
