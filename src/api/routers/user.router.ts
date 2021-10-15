import { Router } from "express";
import { register, login } from "../controllers/user.controller";

const router = Router();

export default () => {
  router.post("/register", register);
  router.post("/login", login);

  return router;
};
