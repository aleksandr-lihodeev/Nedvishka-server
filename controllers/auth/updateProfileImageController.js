import Auth from "../../models/Auth.js";

export const updateProfileImageController = async (req, res) => {
  try {
    const { userId } = req.user;
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).send({ message: "Image URL is required" });
    }

    const user = await Auth.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.image = imageUrl;
    await user.save();

    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error from updateProfileImageController",
    });
  }
};
