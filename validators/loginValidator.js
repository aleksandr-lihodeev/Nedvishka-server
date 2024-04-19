import { check } from "express-validator";

export const loginValidator = [
    check("email").isEmail().withMessage("invalid email"),
    check("password")
        .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage(
            "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
        )
        .isLength({ min: 7, max: 15 })
        .withMessage("Password must be between 7 and 15 symbols"),
];
