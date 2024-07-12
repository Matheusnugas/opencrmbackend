import ClientServices from '../services/Client.services';
import { Request, Response } from 'express';

export default class Client {
  private service = new ClientServices();

  async createNewAccount(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.service.createNewAccount(req);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Could not create account', error });
    }
  }

  async getToken(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.service.getToken(req);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error on Firebase Login', error });
    }
  }
}