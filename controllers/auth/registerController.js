import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Auth from "../../models/Auth.js";

dotenv.config();

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const findUser = await Auth.findOne({ email });
        if (findUser)
            return res.status(401).send({ message: "User already exists" });
        const hash_pass = await bcrypt.hash(password, 10);
        const user = await Auth.create({
            name,
            email,
            hash_pass,
        });

        const token = jwt.sign(
            { email: user.email, userId: user._id },
            process.env.JWT_SECRET
        );

        res.status(201).send({
            token,
            message: "Register success",
        });
    } catch (e) {
        res.status(500).send({ message: "Internal Server Error" });
    }
};
