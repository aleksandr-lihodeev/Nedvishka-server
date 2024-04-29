import { Schema, model } from "mongoose";

const CardSchema = new Schema({
    Districts: {
        type: [String],
        required: true,
    },
    Documents: {
        type: String,
        required: true,
    },
    Floor: {
        type: Number,
        required: true,
    },
    Payment: {
        type: String,
        required: true,
    },
    PloshadM2: {
        type: Number,
        required: true,
    },
    PriceForm: {
        type: Number,
        required: true,
    },
    PriceOnHands: {
        type: String,
        required: true,
    },
    Sostoyanie: {
        type: String,
        required: true,
    },
    StatusObject: {
        type: String,
        required: true,
    },
    StreetAround: {
        type: String,
        required: true,
    },
    TagCoordination: {
        type: String,
        required: true,
    },
    TelNumber: {
        type: String,
        required: true,
    },
    Texteditor: {
        type: String,
        required: true,
    },
    TipNedvishki: {
        type: String,
        required: true,
    },
    TotalFloor: {
        type: Number,
        required: true,
    },
    TypeOffer: {
        type: String,
        required: true,
    },
    Upload: {
        type: String,
        required: true,
    },
    additionTelNumber: {
        type: String,
        required: true,
    },
    communication: {
        type: [String],
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    typeOfDeal: {
        type: String,
        required: true,
    },
});
export default model("Card", CardSchema);
