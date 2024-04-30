import { Schema, model } from "mongoose";

const OwnersCards = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    items: [
        {
                type: Schema.Types.ObjectId,
                ref: "Card",       
        },
    ],
});

export default model("OwnersCards",OwnersCards );
