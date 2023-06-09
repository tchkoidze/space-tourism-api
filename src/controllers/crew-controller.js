import Crew from "../models/Crew.js";

export const getAllCrew = async (req, res) => {
  const data = await Crew.find();
  return res.json(data);
};
