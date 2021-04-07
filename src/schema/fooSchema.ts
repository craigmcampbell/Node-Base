import { createSchema, Type, typedModel } from 'ts-mongoose';

export const contentSchema = createSchema({
  bar1: Type.number({ required: true }),
  bars: Type.array({ required: true }).of({
    value: Type.string({ required: true }),
    text: Type.string({ required: true }),
  }),
});
