import OwnersCards from "../../models/OwnersCards.js";
import Card from "../../models/Card.js"
export const deleteCardController = async (req, res) => {
  const paramsId = req.params.id
  const {userId ,card_Id} = req.body
  try {
    console.log(userId);
    console.log(paramsId ,"paramsId deleteCardController");
    const result = await OwnersCards.updateOne(
      { userId: userId },
      { $pull: { items: { _id: paramsId } } }
    );
    
    const deleteFromCard = await Card.findByIdAndDelete(card_Id);
    if (!deleteFromCard) res.status(404).send({ message: "Item not found" });

    console.log('Product removed:', result);
    res.status(200).send({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
