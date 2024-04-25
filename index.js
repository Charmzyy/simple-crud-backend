const express = require("express");
const mongoose = require("mongoose");
const { Product } = require("./models");
const productRoute = require("./routes/product.route");
const authRoute = require('./routes/auth.route');
const db = require("./config/db");
const app = express();

const port = process.env.PORT || 3000;
//middleware
db();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);
app.use("/api/auth",authRoute);

app.get("/", (req, res) => {
  res.status(200).send("Hello from Node Api!!! ");
});

// MongoDB connection using MongoClient
