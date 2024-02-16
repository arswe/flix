import { Request, Response } from 'express';
import { MessageModel } from '../models/message';

class MessageController {
  public async getAllMessage(request: Request, response: Response) {
    try {
      const message = await MessageModel.find();

      return response.status(201).json({ data: message });
    } catch (error) {
      return response.status(400).json({ status: false, error });
    }
  }
}

export default new MessageController();
