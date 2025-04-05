import  connectDB  from "../../lib/dbConnect";
import Profile from "../../lib/models/profileschema";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();
    try {
        const profiles = await Profile.find();
        return NextResponse.json(profiles);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
