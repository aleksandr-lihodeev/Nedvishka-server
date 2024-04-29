import OwnersCards from "../../models/OwnersCards.js";

export const getOwnersCardsController = async (req, res) => {
    try {
        const {userId} = req.user
        const ownersCart = await OwnersCards.find({userId}).populate('items.product')

        return res.status(200).send({ ownersCart });
    } catch (e) {
        res.status(500).send({ message: "Internal Server Error" });
    }
};
