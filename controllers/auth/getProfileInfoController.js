import Auth from "../../models/Auth.js";
export const getProfileInfoController = async (req, res) => {
  try {
    console.log(req.user.userId);
    const user = await Auth.findById(req.user.userId).select("-hash_pass");
    if (!user) return res.status(404).send({ message: "User not found" });
    res.status(200).send({ user });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error from getProfileInfoController" });
  }
};
