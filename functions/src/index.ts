import { runWith } from 'firebase-functions/v1';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  DEFAULT_TIMEOUT: 540,
  DEFAULT_MAX_INSTANCES: 10,
  DEFAULT_MIN_INSTANCES: 1,
};

exports.clientroute = runWith({
    maxInstances: config.DEFAULT_MAX_INSTANCES,
    timeoutSeconds: config.DEFAULT_TIMEOUT,
  }).https.onRequest(async (req, res) => {
    const { default: clientRoute } = await import('./routes/Client.routes');
    return clientRoute(req, res);
});
