import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    passwore: { type: String, require: true },
    token: { type: String },
    socket: { type: String },
    status: { type: String, default: 1 },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model('User', UserSchema);
