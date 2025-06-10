import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("MONGODB_URI não definida");
}

const client = new MongoClient(uri);

export async function getHeartNames() {
  await client.connect();
  const db = client.db("mongodb");
  const collection = db.collection("doar-casadamiao");

  const result = await collection.find().sort({ date: -1 }).toArray();
  return result;
}
