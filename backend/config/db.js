import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sdraju24:1234567890@cluster0.9oxz8.mongodb.net/delivery_project"
    )
    .then(() => console.log("DB Connected"));
};
