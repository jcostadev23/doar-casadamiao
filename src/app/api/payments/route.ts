import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI as string;

  const client = await new MongoClient(uri).connect();
  const db = client.db("mongodb");
  const collection = db.collection("doar-casadamiao");

  const event = await req.json();

  if (event.data.object.custom_fields.length) {
    try {
      const result = await collection.insertOne({
        heart_name: event.data.object.custom_fields[0].text.value,
        date: new Date(),
      });

      await client.close();

      return NextResponse.json({ status: "Success", value: result.insertedId });
    } catch (error) {
      return NextResponse.json({ status: "Failed", value: error });
    }
  }
  return NextResponse.json({ status: 500 });
}

export async function GET() {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI as string;

  const client = await new MongoClient(uri).connect();
  const db = client.db("mongodb");
  const collection = db.collection("doar-casadamiao");

  try {
    const result = await collection.find().sort({ date: -1 }).toArray();
    await client.close();

    return NextResponse.json({ status: "Success", value: result });
  } catch (error) {
    return NextResponse.json({ status: "Failed", value: error });
  }
}
