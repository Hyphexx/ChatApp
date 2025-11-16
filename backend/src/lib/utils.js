import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none", // ← Changed from "strict"
    secure: true,
     domain: ".railway.app"  // ← Changed from process.env.NODE_ENV check
  });

  return token;
};