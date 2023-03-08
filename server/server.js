const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(port, () => console.log(`Server started on port ${port}`));
