import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// Post creating new data
export async function POST(request) {
  const { title, description, Status } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description, Status });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

// Get Data
export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find(); //used to get all schema in the Topic collection from the database.//
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  //params to get id in client-side like this in backend-side//
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
