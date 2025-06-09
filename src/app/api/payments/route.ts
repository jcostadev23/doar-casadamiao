import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const uri = process.env.MONGODB_URI as string;

const client = await new MongoClient(uri).connect();
const db = client.db("mongodb");
const collection = db.collection("doar-casadamiao");

export async function POST(req: NextRequest) {
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
  if (!uri) {
    return NextResponse.json(
      { status: "Failed", value: "MONGODB_URI não definida" },
      { status: 500 }
    );
  }

  try {
    const names = await collection.find().toArray();

    await client.close();

    return NextResponse.json(
      { status: "Success", value: names },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "Failed", value: String(error) },
      { status: 500 }
    );
  }
}
