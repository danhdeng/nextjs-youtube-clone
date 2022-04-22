import express from 'express';
import requireUser from '../../middleware/requireUser';
import {
  findVideosHandler,
  streamVideosHandler,
  updateVideoHandler,
  uploadVideoHandler,
} from './video.controller';

const router = express.Router();

router.post('/', requireUser, uploadVideoHandler);

router.patch('/:videoId', requireUser, updateVideoHandler);

router.get('/:videoId', streamVideosHandler);

router.get('/', findVideosHandler);

export default router;
