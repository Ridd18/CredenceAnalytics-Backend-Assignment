import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: String,
    },
    img: {
      type: String,
    },
    summary: {
      type: String,
    },
  },
  { versionKey: false }
);

export const bookModel = mongoose.model("Books", bookSchema);
