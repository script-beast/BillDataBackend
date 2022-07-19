const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const billRoutes = require("./routes/bill");

const Port = process.env.PORT || 40001;
const app = express();

mongoose.connect(
  // "mongodb+srv://fullimagesdb:images143@cluster0.hxc4m.mongodb.net/ImagesDB?retryWrites=true&w=majority",
  "mongodb+srv://fullimagesdb:images143@cluster0.hxc4m.mongodb.net/BillsDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DataBase Connected");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", billRoutes);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
