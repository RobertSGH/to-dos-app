import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  content: string;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
}

const todoSchema: Schema = new Schema({
  content: { type: String, required: true },
  completed: { type: Boolean, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

export default mongoose.models.Todo ||
  mongoose.model<ITodo>('Todo', todoSchema);
