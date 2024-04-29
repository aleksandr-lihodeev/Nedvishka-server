import Card from "../../models/Card.js";
import OwnersCards from "../../models/OwnersCards.js";
import {countGrandTotal, findPositionOfItem} from "../../helpers/helpers.js";

export const deleteCardController = async (req, res) => {
    const {userId} = req.user;
    const { productid} = req;
    console.log(req)
    try {
        const card = await Card.findById(productid);

        if (!card) {
            return res.status(404).send({message: "Product not found"});
        }

        const ownerCart = await OwnersCards.findOne({userId});

        if (!ownerCart) {
            return res.status(404).send({message: "Cart not found"});
        }

        const itemIndex = findPositionOfItem(ownerCart.items, productid);

        if (itemIndex !== -1) {
            if (ownerCart.items[itemIndex].quantity > 1) {
                ownerCart.items[itemIndex].quantity -= 1;
                ownerCart.items[itemIndex].total = ownerCart.items[itemIndex].quantity * product.price;
            } else {
                ownerCart.items = ownerCart.items.filter(item => item.product != productid);

                if (ownerCart.items.length === 0) {
                    await OwnersCards.findOneAndDelete({userId});
                    return res.status(200).send({message: "Cart removed"});
                }
            }

            ownerCart.grandTotal = countGrandTotal(ownerCart.items, "total");
            await ownerCart.save();

            return res.status(200).send({message: "Product quantity updated in cart"});
        } else {
            return res.status(404).send({message: "Product not found in cart"});
        }
    } catch (e) {
        res.status(500).send({error: e, message: "Internal Server Error"});
    }
};
