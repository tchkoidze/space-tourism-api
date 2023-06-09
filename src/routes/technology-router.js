import express from "express";
import { getAllTecnology } from "../controllers/technology-controller.js";

const technologyRouter = express.Router();

technologyRouter.get("/technology", getAllTecnology);

console.log(getAllTecnology);
export default technologyRouter;
