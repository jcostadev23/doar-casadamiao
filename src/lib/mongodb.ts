import { MongoClient } from "mongodb";

export async function getHeartNames() {
  const uri = process.env.MONGODB_URI as string;

  if (!uri) {
    throw new Error("MONGODB_URI não definida");
  }

  const client = new MongoClient(uri);

  if (process.env.NODE_ENV === "production" && typeof window === "undefined") {
    await client.connect();
  }

  const db = client.db("mongodb");
  const collection = db.collection("doar-casadamiao");
  try {
    const result = await collection.find().sort({ date: -1 }).toArray();
    await client.close();

    return result;
  } catch {
    return [];
  }
}
