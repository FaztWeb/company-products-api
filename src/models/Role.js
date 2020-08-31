import { Schema, model } from "mongoose";

const roleSchema = new Schema({
  name: String,
});

export default model("Role", roleSchema);
