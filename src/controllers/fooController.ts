import { Request, Response } from 'express';
import Debug from 'debug';

import { getFoo } from '../services/fooService';

import {
  buildErrorResponse,
  buildSuccessResponse,
} from '../helpers/jsonApiResponseHelper';

const debug = Debug('app:userController');

export const get = async (req: Request, res: Response) => {
  try {
    const foo = await getFoo();
    res.json(buildSuccessResponse(foo));
  } catch (error) {
    res.send(
      buildErrorResponse('400', 'Get Foo Error', error, 'fooController', '')
    );
  }
};
