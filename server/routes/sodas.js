import express from 'express';

import { getSodas, updateSoda, selectSoda } from '../controllers/sodas.js'

const router = express.Router();

router.get('/', getSodas);
router.patch('/:id', updateSoda);
router.patch('/:id/selectSoda', selectSoda);

export default router;