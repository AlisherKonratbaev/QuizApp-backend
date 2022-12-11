import { Schema, model } from "mongoose";

const Users = new Schema({
  fullName: { type: String, require: true, minLength: 3 },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  role: {type: Array}
});

export default model("Users", Users);
