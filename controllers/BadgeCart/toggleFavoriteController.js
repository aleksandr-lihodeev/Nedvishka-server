import Favorite from "../../models/Favorite.js";
import { findPositionOfItem } from "../../helpers/helpers.js";

export const toggleFavoriteController =async (req , res ) =>{
   const { userId } = req.user;
   const { productId } = req.params;
   try {
      const favorite = await Favorite.findOne({ userId });

      if (favorite) {
          const productIndex = findPositionOfItem(favorite.favoriteItems, productId);

          if (productIndex !== -1) {
              favorite.favoriteItems.splice(productIndex, 1);
              await favorite.save();

              return res.status(200).send({ message: "Product removed from favorites" });
          } else {
              favorite.favoriteItems.push({ favorites: productId });
              await favorite.save();

              return res.status(200).send({ message: "Product added to favorites" });
          }
      } else {
          await Favorite.create({
              userId,
              favoriteItems: [{ favorites: productId }],
          });

          return res.status(201).send({ message: "Product added to new favorites list" });
      }
  } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal Server Error" });
  }
}