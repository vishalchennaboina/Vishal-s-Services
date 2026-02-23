import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);

// 🔥 PROOF ROUTE — to verify this server is responding
app.get("/whoami", (req, res) => {
  console.log("WHOAMI HIT");
  res.send("THIS IS CYBER HABIBI BACKEND");
});

// health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// actual routes
app.use("/api/contact", contactRoutes);

const PORT = 5050;
app.listen(PORT, () => console.log(`🔥 Backend running on port ${PORT}`));

