import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// Put means editing any object
export async function PUT(request, { params }) {
  const { id } = params;
  // console.log("request", request);
  const {
    newTitle: title,
    newDescription: description,
    NewStatus: Status,
  } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description, Status });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

// get data on edit page by Id
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
