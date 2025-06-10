import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://doar.casadamiao.pt",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function POST(req: NextRequest) {
  const uri = process.env.MONGODB_URI as string;

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
      return NextResponse.json({
        status: "Failed to post",
        value: String(error),
      });
    }
  }
  return NextResponse.json({
    status: "Failed to post",
    value: "Missing fields",
  });
}

export async function GET() {
  const uri = process.env.MONGODB_URI as string;

  const client = await new MongoClient(uri).connect();
  const db = client.db("mongodb");
  const collection = db.collection("doar-casadamiao");

  try {
    const result = await collection.find().sort({ date: -1 }).toArray();
    await client.close();

    return NextResponse.json(
      { status: "Success", value: result },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "Failed to get", value: error },
      { status: 500, headers: corsHeaders }
    );
  }
}
