import { Request, Response } from "express";
import Carteira from "../../models/Carteira";

export const wallet = async (req: Request, res: Response) => {
  res.status(200).send(await Carteira.findOne(req.user));
};

export const deposit = async (req: Request, res: Response) => {
  if (req.user != undefined) {
    await Carteira.findOne(req.user).updateOne({
      $inc: { "currency.USD": req.body.amount },
    });

    res.status(200).send(await Carteira.findOne(req.user));
  }
};

export const tranfer = async (req: Request, res: Response) => {
  if (req.user != undefined) {
    let cryptoFrom = `currency.${req.body.from}`;
    let cryptoTo = `currency.${req.body.to}`;
    let from = req.body.from;

    let quantityFrom = await Carteira.findOne(req.user);

    if (from == "USD" && quantityFrom != null) {
      from = quantityFrom.currency.USD;
    }
    if (from == "BTC" && quantityFrom != null) {
      from = quantityFrom.currency.BTC;
    }
    if (from == "ETH" && quantityFrom != null) {
      from = quantityFrom.currency.ETH;
    }
    if (from == "DOGE" && quantityFrom != null) {
      from = quantityFrom.currency.DOGE;
    }
    if (from == "ADA" && quantityFrom != null) {
      from = quantityFrom.currency.ADA;
    }
    if (from == "LTC" && quantityFrom != null) {
      from = quantityFrom.currency.LTC;
    }

    if (from >= req.body.amount) {
      await Carteira.findOne(req.user).updateOne({
        $inc: { [cryptoFrom]: -req.body.amount },
      });

      await Carteira.findOne(req.user).updateOne({
        $inc: { [cryptoTo]: req.body.amount },
      });

      res.status(200).send(await Carteira.findOne(req.user));
    }

    res.status(400).send({ message: "Could not be possible do the transfer!" });
  }
};
