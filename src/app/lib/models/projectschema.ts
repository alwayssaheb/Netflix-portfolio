import mongoose, { Schema, Document, model } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  techUsed: string; // Comma-separated tech stack like "ReactJS, NodeJS"
  image: {
    url: string;
  };
}

const ImageSchema = new Schema(
  {
    url: { type: String, required: true },
  },
  { _id: false } // Prevent Mongo from creating a separate _id for the image object
);

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techUsed: { type: String, required: true },
    image: { type: ImageSchema, required: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

export default mongoose.models.Project || model<IProject>('Project', projectSchema);
