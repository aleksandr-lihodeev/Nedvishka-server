import Auth from "../../models/Auth.js";

export const deleteProfileImageController = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await Auth.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.image = null;
    await user.save();

    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error from deleteProfileImageController",
    });
  }
};
