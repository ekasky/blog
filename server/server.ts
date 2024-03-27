import express from "express";
import config from "./config/config";

const { PORT } = config;

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
