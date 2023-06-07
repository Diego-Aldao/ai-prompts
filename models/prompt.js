import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creador: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "El prompt es obligatorio"],
  },
  tag: {
    type: String,
    required: [true, "El tag es obligatorio"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
