import { typedModel } from 'ts-mongoose';
import { contentSchema } from './../schema/contentSchema';

export const Foo = typedModel('Foo', contentSchema, undefined, undefined, {
  getFoo: function () {
    return this.find();
  },
});
