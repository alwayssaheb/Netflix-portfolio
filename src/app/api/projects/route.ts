import connectDB from '../../lib/dbConnect';
import Project from '../../lib/models/projectschema';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  try {
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
