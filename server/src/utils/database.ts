import mongoose from 'mongoose';

import { logger } from './logger';

const MONGOOSE_DB_CONNECTION_STRING =
  process.env.MONGOOSE_DB_CONNECTION_STRING ||
  'mongodb+srv://dandeng:TestMongoDb6367@cluster0.nu9xs.mongodb.net/youtube_clone?retryWrites=true&w=majority';

export async function connectToDatbase() {
  try {
    await mongoose.connect(MONGOOSE_DB_CONNECTION_STRING);
    logger.info(`connected to mongoose db : ${MONGOOSE_DB_CONNECTION_STRING}`);
  } catch (e) {
    logger.error(e, 'Failed to connect to database. please check the error');
    process.exit(1);
  }
}

export async function disconnectFromDatabase() {
  await mongoose.connection.close();
  logger.info('Disconnect from database');
}
