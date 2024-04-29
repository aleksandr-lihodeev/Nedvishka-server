import Card from "../../models/Card.js";
import OwnersCards from "../../models/OwnersCards.js";
import { countGrandTotal } from "../../helpers/helpers.js";

export const addCardController = async (req, res) => {
    try {
        const { userId } = req.user;

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
                quantity: 1,
                total: card.price
            });
        } else {
            ownersCart = new OwnersCards({
                userId,
                items: [{
                    product: card._id,
                    quantity: 1,
                    total: card.price
                }],
                grandTotal: card.price,
            });
        }

        ownersCart.grandTotal = countGrandTotal(ownersCart.items, "total");

        await ownersCart.save();

        return res.status(201).send({ message: "Product added to cart" });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e, message: "Internal Server Error" });
    }
};
