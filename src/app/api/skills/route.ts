import connectDB from "../../lib/dbConnect";
import Skill from "../../lib/models/skillsschema";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  try {
    const skills = await Skill.find();
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
