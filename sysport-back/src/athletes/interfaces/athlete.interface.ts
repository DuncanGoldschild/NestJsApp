import { Document } from 'mongoose';

export interface Athlete extends Document {
  readonly name: string;
  readonly description: string;
}