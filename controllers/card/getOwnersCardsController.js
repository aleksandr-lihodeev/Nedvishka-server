import OwnersCards from "../../models/OwnersCards.js";

export const getOwnersCardsController = async (req, res) => {
  try {
    const { userId } = req.user;
    const ownersCart = await OwnersCards.find({ userId }).populate({
      path: "items.product",
      populate: {
        path: "createdBy",
        select: "image",
      },
    });

    const sanitizedOwnersCart = ownersCart.map((owner) => {
      const { __v, _id, ...rest } = owner.toObject();
      return rest;
    });

    return res.status(200).send(...sanitizedOwnersCart);
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
