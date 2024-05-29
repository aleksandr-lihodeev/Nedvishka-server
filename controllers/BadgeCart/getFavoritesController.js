import Favorite from "../../models/Favorite.js";

export const getFavoritesController = async (req, res) => {
  const { userId } = req.user;
  console.log(userId);
  const cart = await Favorite.findOne({ userId }).populate("favoriteItems");
  res.status(200).send(cart);
};
