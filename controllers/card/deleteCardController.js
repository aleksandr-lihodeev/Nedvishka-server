import Card from "../../models/Card.js";
export const deleteCardController = async (req, res) => {
  try {
    const deletedItem = await Card.findByIdAndDelete(req.params.id);
    const deletedID = await Card.findById(req.params.id);
    console.log(deletedID);
    if (!deletedItem) res.status(404).send({ message: "Item not found" });
    else res.status(200).send({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
