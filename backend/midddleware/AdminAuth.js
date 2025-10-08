import jwt, { decode } from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // const { token } = req.header;
    const token = req.header("token");
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)
    if (decoded.email !== process.env.ADMIN_EMAIL || decoded.role !== "admin") {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    req.admin = decode;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export default adminAuth;
