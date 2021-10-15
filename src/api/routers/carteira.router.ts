import { Router } from "express";
import { deposit, tranfer, wallet } from "../controllers/carteira.controller";
import passport from "passport";
import authentication from "../middlewares/authentication";

const router = Router();

export default () => {
  router.use(passport.authenticate("jwt", { session: false }));

  router.post("/deposit", authentication, deposit);
  router.post("/transfer", authentication, tranfer);
  router.get("/wallet", authentication, wallet);

  return router;
};
