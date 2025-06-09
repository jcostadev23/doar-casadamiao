import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const event = await req.json();

  if (event.data.object.custom_fields.length) {
    try {
      const client = await clientPromise;
      const db = client.db("mongodb");
      const collection = db.collection("doar-casadamiao");

      const result = await collection.insertOne({
        heart_name: event.data.object.custom_fields[0].text.value,
        date: new Date(),
      });

      return NextResponse.json({ status: "Success", value: result.insertedId });
    } catch (error) {
      return NextResponse.json({ status: "Failed", value: error });
    }
  }
  return NextResponse.json({ status: 500 });
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mongodb");
    const collection = db.collection("doar-casadamiao");

    const names = await collection.find().toArray();

    return NextResponse.json(
      { status: "Success", value: names },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "Failed", value: String(error) },
      { status: 500 }
    );
  }
}
