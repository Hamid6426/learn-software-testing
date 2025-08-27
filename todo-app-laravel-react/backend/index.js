// index.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

// Healthcheck endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Example API endpoint
app.get("/api/todos", (req, res) => {
  res.json([
    { id: 1, task: "Learn Docker", done: false },
    { id: 2, task: "Build React frontend", done: true },
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
});
