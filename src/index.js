// require('dotenv').config({path:'./env'});
import dotenv from 'dotenv';
import connectDB from "./db/index.js";


dotenv.config({
  path: './env '
});
connectDB();



// const app = express();
//import express from "express";
//  function connectDB(){
//   database could have been connected in this way as well but we use iffe
//  }
//
// (async () => {
//   try {
//     const db = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });
//
//     app.listen(process.env.PORT, () => {
//       console.log("Server running on port: " + process.env.PORT);
//     })
//
//   } catch (e) {
//     console.log(e);
//   }
// })();
