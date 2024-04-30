import Card from "../../models/Card.js";
import OwnersCards from "../../models/OwnersCards.js";

export const addCardController = async (req, res) => {
    try {
        const { userId } = req.user;
        const {typeOfDeal, TipNedvishki, Rooms, PloshadM2, Floor, TotalFloor, ownerName, TelNumber, additionTelNumber, Districts, StreetAround, Sostoyanie, Documents, communication, TypeOffer, furniture, Payment, StatusObject, Texteditor, PriceForm, PriceOnHands, Upload} = req.body
        let card = await Card.findOne(req.body);
        if (!card) {
            card = await Card.create(req.body);
        }
        const existingCard = await OwnersCards.findOne({ userId, "items.product": card._id });
        if (existingCard) {
            return res.status(400).send({ message: "Product already exists in cart" });
        }

        let ownersCart = await OwnersCards.findOne({ userId });

        if (ownersCart) {
            ownersCart.items.push({
                product: card._id,
            });
        } else {
            ownersCart = new OwnersCards({
                userId,
                items: [{
                    product: card._id,
                }],
            });
        }

        await ownersCart.save();

        return res.status(201).send({ message: "Product added to cart" });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e, message: "Internal Server Error" });
    }
};
