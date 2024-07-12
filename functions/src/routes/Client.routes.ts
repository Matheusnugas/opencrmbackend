import { Request, Response } from 'express';
import Client from '../controller/Client.controller';
import errorMiddleware from '../middlewares/error.middleware';
import cors from 'cors';
import express from 'express';

const router = express();

const clientController = new Client();

router.use(cors());

router.use(express.json());

router.post('/createAccount', (req: Request, res: Response) => clientController.createNewAccount(req, res));

router.post('/login', (req: Request, res: Response) => clientController.getToken(req, res));

router.use(errorMiddleware)

export default router;