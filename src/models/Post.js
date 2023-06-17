import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required:  [true, "El titulo es obligatorio"],
    },
    desc: {
      type: String,
      required:  [true, "Desc obligatoria"],
    },
    image: {
      type: String,
      required:  [true, "Img obligatoria"],
    },
    content: {
      type: String,
      required:  [true, "Contenido obligatorio"],
    },
    username: {
      type: String,
      required:  [true, "Nombre de user obligatorio"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post ||  mongoose.model("Post", postSchema);

export default Post
