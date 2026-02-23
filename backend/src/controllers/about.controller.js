import { aboutData } from "../data/about.data.js";

export const getAbout = (req, res) => {
  res.json(aboutData);
};
