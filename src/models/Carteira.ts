import { model, Schema } from "mongoose";
import { User } from "./User";

interface Crypto {
  USD: number;
  BTC: number;
  ETH: number;
  DOGE: number;
  ADA: number;
  LTC: number;
}

interface Carteira {
  currency: Crypto;
  user: User;
}

const bandSchema = new Schema<Carteira>({
  currency: {
    USD: {
      type: Number,
      default: 0,
    },
    BTC: {
      type: Number,
      default: 0,
    },
    ETH: {
      type: Number,
      default: 0,
    },
    DOGE: {
      type: Number,
      default: 0,
    },
    ADA: {
      type: Number,
      default: 0,
    },
    LTC: {
      type: Number,
      default: 0,
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
});

export default model<Carteira>("Carteira", bandSchema);
