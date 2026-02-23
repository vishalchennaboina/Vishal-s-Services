import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const SECRET = "supersecretkey";

// fake database (later real DB)
const admins = [
  { email: "admin@cyber.com", password: "1234", role: "admin" },
  { email: "viewer@cyber.com", password: "1234", role: "viewer" },
];

router.post("/login", (req, res) => {
    console.log("LOGIN DATA:", req.body);

  const { email, password } = req.body;

  const user = admins.find(
    (a) => a.email === email && a.password === password
  );

  if (!user) {
    return res.status(401).json({ success: false });
  }

  const token = jwt.sign(
    {
      email: user.email,
      role: user.role,
    },
    SECRET,
    { expiresIn: "2h" }
  );

  res.json({ success: true, token, role: user.role });
});

export default router;
