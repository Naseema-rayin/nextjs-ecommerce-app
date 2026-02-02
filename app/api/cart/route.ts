import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Cart API - GET" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: "Cart API - POST", received: body });
}