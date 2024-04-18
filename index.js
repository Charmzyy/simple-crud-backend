const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

const port = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.status(200).send("Hello from Node Api!!! ");
});

mongoose
  .connect(
    "mongodb+srv://admin:2020@backendmwai.opavqrd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backendmwai"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Listening On ${port}`);
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
