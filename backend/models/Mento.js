import mongoose from 'mongoose';

const { model, Schema } = mongoose;

export default model(
  'Mento',
  Schema(
    {
      date: {
        type: Date,
        default: () => Date.now(),
      },
      recipient: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
    { strict: true }
  )
);
