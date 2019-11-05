import * as mongoose from 'mongoose';

export const AthleteSchema = new mongoose.Schema({
  name: String,
  description: String,
});