import { Schema, model } from "mongoose";

const FavoriteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  favoriteItems: [
    {
      favorites: {
        type: Schema.Types.ObjectId,
        ref: "Card",
      },
    },
  ],
});
export default model("Favorite", FavoriteSchema);
