import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRoute from '../src/route/book.route.js'
import userRoute from '../src/route/user.route.js'

const app = express()
const PORT = process.env.PORT || 4000;
dotenv.config({
  path :'./.env'
});

app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;

// connect to mongoDB
try {
    mongoose.connect(URL);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Mongo DB Error: ", error);
}


app.use("/book" , bookRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
