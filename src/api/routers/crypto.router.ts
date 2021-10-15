import { Router } from "express";
import { list } from "../controllers/crypto.controller";

const router = Router();

export default () => {
  router.get("/quotes", list);

  return router;
};
