import { Request, Response } from 'express';
import { MessageModel } from '../models/message';

class MessageController {
  public async getAllMessage(request: Request, response: Response) {
    try {
      const message = await MessageModel.find();
      
    } catch (error) {}
  }
}

export default new MessageController();
