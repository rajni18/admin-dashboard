const mongoose = require("mongoose");
console.log("process.env.MONGO_URI", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to Database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
