import Card from "../../models/Card.js";
export const cardDetailController = async (req, res) => {
  try {
    const idProduct = await Card.findById(req.params.id);
    console.log(idProduct);
    if (idProduct.length === 0) {
      res.status(404).send({ message: "No items found in this category" });
    } else {
      res.status(200).send(idProduct);
    }
  } catch (e) {
    res.status(500).send({ message: error.message });
  }
};
