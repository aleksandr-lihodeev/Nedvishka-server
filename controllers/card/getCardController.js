  import Card from "../../models/Card.js";

  export const getCardController = async (req, res) => {
    try {
      const card = await Card.find().sort({ createdAt: -1 }).populate("createdBy", "image");

      return res.status(200).send({ card });
    } catch (e) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  };
