import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  genre: [String],
});

// TODO: Instance method
blogSchema.methods = {
  findGenre: function (genre) {
    console.log({ genre });
    return mongoose.model("Blog").find({
      genre,
    });
  },
};

blogSchema.statics.findByTitle = function (title) {
  return this.findOne({
    title,
  });
};

blogSchema.statics.findByLetter = function (letter) {
  return this.find({
    title: new RegExp(letter, "i"),
  });
};
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
