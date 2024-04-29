import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader)
        return res.status(403).send("Authorization header is missing");

    const token = authHeader.replace("Bearer ", "");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        return next();
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            return res.status(401).send("Invalid or expired token");
        }
        return res.status(500).send("Internal Server Error");
    }
};
