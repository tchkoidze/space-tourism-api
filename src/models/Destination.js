import mongoose from "mongoose";

const { Schema } = mongoose;

const destinationSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  images: {
    png: { type: Schema.Types.String, required: true },
    webp: { type: Schema.Types.String, required: true },
  },
  description: { type: Schema.Types.String, required: true },
  distance: { type: Schema.Types.String, required: true },
  travel: { type: Schema.Types.String, required: true },
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
