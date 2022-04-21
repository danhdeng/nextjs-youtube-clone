import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { CORS_ORIGIN } from './constants';
import { connectToDatbase, disconnectFromDatabase } from './utils/database';
import { logger } from './utils/logger';
import userRoute from './modules/user/user.route';
const PORT = process.env.PORT || 4400;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(helmet());

//add user rounte
app.use('/api/users', userRoute);

const server = app.listen(PORT, async () => {
  await connectToDatbase();
  logger.info(`Server is running at http://localhost:${PORT}`);
});

if (process.pid) {
  logger.info('This process is your pid ' + process.pid);
}

const signals = ['SIGTERM', 'SIGINT'];

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    console.log('shut down signal');
    logger.info(`Closing, get signal: ${signal}`);
    server.close();

    //close db connection
    await disconnectFromDatabase();
    logger.info(`the work is done here`);
    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
