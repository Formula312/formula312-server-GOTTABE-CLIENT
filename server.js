const express = require("express");
const app = express();
const mongoose = require("./mongo");
const bodyParser = require("body-parser");

const vendorRouter = require("./routes/vendorRoutes");

const PORT = 8800;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose();
app.use(vendorRouter);

app.listen(PORT, () => console.log(`Server has started on port ${PORT}...`));
