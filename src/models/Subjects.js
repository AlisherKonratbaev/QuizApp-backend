import { Schema, model } from "mongoose";

const Subjects = new Schema({
  name: { type: String, require: true, minlength: 3, maxlength: 50, unique:true },
});

export default model("Subjects", Subjects);
