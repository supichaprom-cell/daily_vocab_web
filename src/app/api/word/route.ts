import { NextResponse } from "next/server";
import { words } from "@/data/words";

export async function GET() {
  const response = await fetch('http://localhost:8000/api/word');
  const data = await response.json();
  return NextResponse.json({ data });
}
