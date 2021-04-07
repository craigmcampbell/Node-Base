import { get, post, put } from '../helpers/axiosHelper';
import Debug from 'debug';
import { Foo } from '../models/Foo';
import JsonApiResponse from '../models/jsonApi/JsonApiResponse';

const debug = Debug('app:fooService');

export const getFoo = async () => {
  return await Foo.getFoo();
};
