import mongoose, { Schema } from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    to: { type: Schema.Types.ObjectId, require: true },
    sender: { type: Schema.Types.ObjectId, require: true, unique: true },
    subject: { type: String, require: true },
    body: { type: String, require: true },
    status: { type: String, default: 1 },
  },
  {
    timestamps: true,
  }
);

export const MessageModel = mongoose.model('Message', MessageSchema);
