import { Schema, model } from "mongoose";

const OwnersCards = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    items: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Card",
            },
            quantity: {
                type: Number,
                default: 1,
            },
            total: {
                type: Number,
                default: 0,
            },
        },
    ],
    grandTotal: {
        type: Number,
        default: 0,
    },
});

export default model("OwnersCards",OwnersCards );
