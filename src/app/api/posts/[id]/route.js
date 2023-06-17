import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const posts = await Post.findById(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};


export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const posts = await Post.findByIdAndDelete(id);

    return new NextResponse('Post deleted', { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};