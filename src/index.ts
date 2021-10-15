import { connect } from "mongoose";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { createApp } from "./app";
import "./models";

const MONGODB_URL =
  "mongodb+srv://renan:PsBbCABJHidqNcqM@cluster0.zzyio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const bootstrap = async () => {
  await createConnection();
  await connect(MONGODB_URL);
  createApp();
};

bootstrap();
