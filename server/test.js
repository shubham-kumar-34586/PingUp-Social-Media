import mongoose from "mongoose";

const uri =
  "mongodb+srv://shubhamkumar34586_db_user:YOUR_Shubhamdev2004@cluster0.a9ogpif.mongodb.net/pingup";

try {
  await mongoose.connect(uri);
  console.log("Connected");
} catch (err) {
  console.error(err);
}