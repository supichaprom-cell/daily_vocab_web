import { NextResponse } from "next/server";

export async function GET() {
  try {

    const response = await fetch("http://localhost:8000/api/word");

    if (!response.ok) {
      // ถ้า FastAPI มี error ให้ throw
      throw new Error(`Failed to fetch word: ${response.statusText}`);
    }

    const data = await response.json();

    // ส่ง JSON กลับไปยัง frontend
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching word:", error.message);
    return NextResponse.json(
      { error: "Could not fetch word" },
      { status: 500 }
    );
  }
}