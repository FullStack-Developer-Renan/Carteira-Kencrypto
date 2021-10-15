import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { getRepository } from "typeorm";
import User from "../../models/User";

export default (): Strategy => {
  const options: StrategyOptions = {
    secretOrKey: "xpto",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

  const verify = async (jwt_payload: any, done: Function) => {
    const user = await User.findById(jwt_payload.id);

    done(null, user ? user : false);
  };

  return new Strategy(options, verify);
};
