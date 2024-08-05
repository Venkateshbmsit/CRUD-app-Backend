const express = require("express");
const mongoose = require("mongoose");
const Product = require("./modles/product.modle.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello Node API, Server Updated");
});

//connect to db
const mongoURI =
  "mongodb+srv://venkateshkulkarni0000:7EQajNTjthMbmQZu@backenddb.xulaxrg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Connection Failed:", error.message);
  });
