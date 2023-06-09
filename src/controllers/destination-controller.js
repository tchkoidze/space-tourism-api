import Destination from "../models/Destination.js";

export const getAllDestination = async (req, res) => {
  const data = await Destination.find();
  return res.json(data);
};
