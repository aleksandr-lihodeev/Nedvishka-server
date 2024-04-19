import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Auth from "../../models/Auth.js";

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Auth.findOne({ email });
        if (!user) return res.status(404).send({ message: "User not found" });
        const passwordMatch = await bcrypt.compare(password, user.hash_pass);
        if (!passwordMatch)
            return res.status(401).send({ message: "Password is incorrect" });
        const token = jwt.sign(
            { email: user.email, userId: user._id },
            process.env.JWT_SECRET
        );
        return res.status(200).send({ token, message: "Login will be success" });
    } catch (e) {
        res.status(500).send({ message: "Internal Server Error" });
    }
};
