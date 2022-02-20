const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./routes/UserRoutes.js");
const app = express();
app.use(express.json());
mongoose
  .connect(
    // "put mongodb connection link in quotation marks here",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((success) => {
    console.log("Success Mongodb connection");
  })
  .catch((err) => {
    console.log("Error Mongodb connection");
  });
app.use(userRouter);
//http://localhost:3000/users
app.listen(3000, () => {
  console.log("Server is running...");
});
