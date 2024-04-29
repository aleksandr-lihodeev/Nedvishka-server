import { Schema, model } from "mongoose";

const CardSchema = new Schema({
    apartment: {
        type: String,
        required: true,
    },
    geo: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});
export default model("Card", CardSchema);
