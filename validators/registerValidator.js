import { check } from "express-validator";

export const registerValidator = [
    check("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Minimum 5 symbols are required")
        .isLength({ max: 20 })
        .withMessage("Maximum 20 symbols are required")
        .matches(/^[a-z]+$/)
        .withMessage("Name should contain lowercase letters"),
    check("email").isEmail().withMessage("invalid email"),
    check("password")
        .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage(
            "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
        )
        .isLength({ min: 7, max: 15 })
        .withMessage("Password must be between 7 and 15 symbols"),
];
