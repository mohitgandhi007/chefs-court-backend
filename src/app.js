const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/auth.routes");
const caseRoutes = require("./routes/case.routes");
const juryRoutes = require("./routes/jury.routes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/case", caseRoutes);
app.use("/jury", juryRoutes);

app.get("/", (req, res) => {
  res.send("Chef's Court Backend Running");
});

module.exports = app;