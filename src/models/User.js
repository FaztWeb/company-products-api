import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    email: String,
    password: String,
    roles: {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Product", productSchema);
