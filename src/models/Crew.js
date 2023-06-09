import mongoose from "mongoose";

const { Schema } = mongoose;

const crewSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  images: {
    png: { type: Schema.Types.String, required: true },
    webp: { type: Schema.Types.String, required: true },
  },
  role: { type: Schema.Types.String, required: true },
  bio: { type: Schema.Types.String, required: true },
});

const Crew = mongoose.model("Crew", crewSchema);

export default Crew;
