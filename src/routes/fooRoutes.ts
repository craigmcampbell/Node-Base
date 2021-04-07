import express from 'express';
import { get } from '../controllers/fooController';

export const fooRouter = express.Router();

fooRouter.route('/').get(get);
