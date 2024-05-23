import { Schema, model } from "mongoose";

const OwnersCards = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Auth",
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Card",
      },
    },
  ],
});

export default model("OwnersCards", OwnersCards);
