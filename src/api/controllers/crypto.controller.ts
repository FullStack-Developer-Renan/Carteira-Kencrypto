import { Request, Response } from "express";
import { MicroAPI } from "kencrypto/dist";
import { type } from "os";

export const list = async (req: Request, res: Response) => {
  let microApi = new MicroAPI();
  let y: any = [];
  if (req.query.currency != undefined) {
    await microApi
      .cryptoCurrencyQP(req.query.currency as string)
      .then((res) => y.push(res));
    res.send(y);
  } else {
    await microApi.cryptoCurrencyNoQP().then((res) => y.push(res));
    res.send(y);
  }
};
