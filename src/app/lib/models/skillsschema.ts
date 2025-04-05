import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  category: string;
  description: string;
  icon: string;
}

const SkillSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});

// Prevent model overwrite issues in development
export default mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);
