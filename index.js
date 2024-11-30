import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postsRoutes from './routes/posts.js'
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

// app.use("/posts", postsRoutes);
app.use("/", (req, res) => {
    res.send("Hello to memory API");
})

const PORT = process.env.MP_PORT;

const CONNECTION_URL = process.env.MP_CONNECTION_URL;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Listening on PORT :http://localhost:${PORT}/posts`)))
    .catch((error) => console.log(error.message));








