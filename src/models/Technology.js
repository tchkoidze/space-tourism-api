import mongoose from "mongoose";

const { Schema } = mongoose;

const technologySchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  images: {
    portrait: { type: Schema.Types.String, required: true },
    landscape: { type: Schema.Types.String, required: true },
  },
  description: { type: Schema.Types.String, required: true },
});

const Technology = mongoose.model("Technology", technologySchema);

export default Technology;
