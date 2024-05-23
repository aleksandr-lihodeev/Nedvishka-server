import Card from "../../models/Card.js";
import OwnersCards from "../../models/OwnersCards.js";

export const addCardController = async (req, res) => {
  console.log(req.body, "addCardController");
  try {
    const { userId } = req.user;

    // Поиск существующей карточки
    let card = await Card.findOne(req.body);

    if (!card) {
      // Создание новой карточки с полем createdBy
      card = await Card.create({
        ...req.body,
        createdBy: userId,
      });
    }

    // Проверка, есть ли уже эта карточка в корзине пользователя
    const existingCard = await OwnersCards.findOne({
      userId,
      "items.product": card._id,
    });
    if (existingCard) {
      return res
        .status(400)
        .send({ message: "Product already exists in cart" });
    }

    // Поиск корзины пользователя
    let ownersCart = await OwnersCards.findOne({ userId });

    if (ownersCart) {
      ownersCart.items.push({
        product: card._id,
      });
    } else {
      // Создание новой корзины, если ее не существует
      ownersCart = new OwnersCards({
        userId,
        items: [
          {
            product: card._id,
          },
        ],
      });
    }

    await ownersCart.save();

    return res.status(201).send({ message: "Product added to cart" });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: e, message: "Internal Server Error" });
  }
};
