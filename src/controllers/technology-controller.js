import Technology from "../models/Technology.js";

export const getAllTecnology = async (req, res) => {
  const data = await Technology.find();
  return res.json(data);
};
