import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import Carteira from "../../models/Carteira";

export const register = async (req: Request, res: Response) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    var userConfirmation = await User.findOne({ username: req.body.username });

    if (userConfirmation != null) {
      return res.status(400).send({ message: "User already exists" });
    }
    var user = new User(req.body);

    var carteira = new Carteira(user);
    await carteira.save();
    var result = await user.save();
    res.send({ username: result.username });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    var user = await User.findOne({ username: req.body.username }).exec();
    if (!user) {
      return res.status(400).send({ message: "The username does not exist" });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).send({ message: "The password is invalid" });
    }
    const token = jwt.sign({ id: user.id }, "xpto");
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
};
