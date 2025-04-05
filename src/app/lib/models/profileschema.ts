import mongoose, { Schema, Document, model } from "mongoose";


export interface IProfile extends Document {
    title: string;
    description: string;
    linkedin: string;
    resume: string;
}


const profileSchema = new Schema<IProfile>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    linkedin: { type: String, required: true },
    resume: { type: String, required: true }, // Store as a URL
});

export default mongoose.models.Profile || model<IProfile>("Profile", profileSchema);
