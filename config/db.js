const mongoose = require("mongoose");

const db = async () => {
  const uri =
    "mongodb+srv://admin:2020@backendmwai.opavqrd.mongodb.net/?retryWrites=true&w=majority&appName=Backendmwai";
  mongoose
    .connect(uri)
    .then((connection) => {
      console.log(`Database Connected Successfully at ${connection}`);
    })
    .catch((err) => console.log(err));
};

module.exports = db;
