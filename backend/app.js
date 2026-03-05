const express = require("express");
const router = require("./routes/auth.route");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/", router);
app.use(errorHandler);

module.exports = app;
