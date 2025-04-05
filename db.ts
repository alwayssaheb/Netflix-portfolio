import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://saheb2900:1Nf8olPF2IIsvsjH@cluster0.wtwcfhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export default connectDB;
