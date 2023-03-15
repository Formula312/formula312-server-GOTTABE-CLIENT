require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("./mongo");
const bodyParser = require("body-parser");
const cors = require("cors");

const vendorRouter = require("./routes/vendorRoutes");
const stripeRouter = require("./routes/stripeRoutes");
const PORT = 8800;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose();
app.use(vendorRouter);
app.use(stripeRouter);

app.listen(PORT, () => console.log(`Server has started on port ${PORT}...`));
