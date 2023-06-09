import express from "express";

import { getAllDestination } from "../controllers/destination-controller.js";

const destinationRouter = express.Router();

destinationRouter.get("/destination", getAllDestination);

console.log(getAllDestination);
export default destinationRouter;
