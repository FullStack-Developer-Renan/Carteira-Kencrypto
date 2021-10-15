import { model, Schema } from "mongoose";

export interface User {
  username: string;
  password: string;
}

const bandSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<User>("User", bandSchema);
