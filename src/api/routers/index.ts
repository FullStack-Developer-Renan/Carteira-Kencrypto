import { Express } from "express";
import UserRouter from "./user.router";
import CryptoRouter from "./crypto.router";
import CarteiraRouter from "./carteira.router";
import passport from "passport";
import jwtStrategy from "../middlewares/jwtStrategy";

export const RouterBuilder = (app: Express) => {
  passport.use(jwtStrategy());

  const userRouter = UserRouter();
  const cryptoRouter = CryptoRouter();
  const carteiraRouter = CarteiraRouter();

  app.use("/api", userRouter);
  app.use("/api", cryptoRouter);
  app.use("/api", carteiraRouter);
};
