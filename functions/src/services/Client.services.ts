import { Request } from 'firebase-functions/v1';
import jwt from 'jsonwebtoken';
import Keys from '../constants/keys';
import { adminApp } from '../models/index';

const TOKEN_EXPIRATION = 60 * 60 * 24; // 24 hours

export default class ClientServices {
  async createNewAccount(req: Request): Promise<object> {
    const { email, password } = req.body;

    console.log("Criando conta...")

    if (!Keys.PUBLIC_PASS_PHRASE) {
      throw new Error('PUBLIC_PASS_PHRASE is not defined');
    }

    const userRecord = await adminApp.auth().createUser({
      email: email,
      password: password,
    });

    const token = jwt.sign(
      { clientId: userRecord.uid },
      Keys.PUBLIC_PASS_PHRASE,
      {
        expiresIn: TOKEN_EXPIRATION,
      },
    );

    return {
      success: true,
      message: 'Account created successfully!',
      userId: userRecord.uid,
      token,
    };
  }

  async getToken(req: Request): Promise<object> {
    const { id } = req.body;

    if (!Keys.PUBLIC_PASS_PHRASE) {
      throw new Error('PUBLIC_PASS_PHRASE is not defined');
    }

    const decodedToken = await adminApp.auth().verifyIdToken(id);
    const uid = decodedToken.uid;

    const token = jwt.sign(
      { clientId: uid },
      Keys.PUBLIC_PASS_PHRASE,
      {
        expiresIn: TOKEN_EXPIRATION,
      },
    );

    return {
      success: true,
      token: token,
    };
  }
}
