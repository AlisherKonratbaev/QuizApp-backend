import { Schema, model } from "mongoose";

const Questions = new Schema(
  {
    question: { type: String, require: true, minlength: 3 },
    subject: { type: Schema.Types.ObjectId, ref: "Subjects" },
    variantes: { type: Array, require: true },
    class: { type: Number, min: 1, max: 11 },
    answer: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export default model("Questions", Questions);
