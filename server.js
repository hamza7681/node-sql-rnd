require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT;
const helmet = require("helmet");
const cors = require("cors");
const { connect } = require("./database/config");

connect();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "POST,GET,PATCH,OPTIONS,DELETE",
  })
);
app.use("/", require("./routes/router"));

app.listen(port, "0.0.0.0", () =>
  console.log("Server is running on port", port)
);
