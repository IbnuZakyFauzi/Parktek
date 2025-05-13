const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
    const bearer = req.headers["authorization"];
    const headerToken = bearer?.startsWith("Bearer ") ? bearer.split(" ")[1] : null;

    const token = req.cookies.token || headerToken;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.userId }; // Changed from decoded.id to decoded.userId
        next();
    } catch (err) {
        console.error("JWT verification error:", err);
        return res.status(403).json({ message: "Forbidden: Invalid or expired token" });
    }
};
