import { Schema, model } from "mongoose";
import Role from "./Role.js";

const Users = new Schema({
  login: { type: String, require: true, unique: true },
  password: { type: String, require: true, minLength: 6 },
  roles: [{ type: String, ref: Role }],
});

export default model("Users", Users);
