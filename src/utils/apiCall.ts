import { MongoClient } from "mongodb";

export const getHeartNames = async () => {
  const uri = process.env.MONGODB_URI as string;

  const client = await new MongoClient(uri).connect();
  const db = client.db("mongodb");
  const collection = db.collection("doar-casadamiao");

  try {
    const result = await collection.find().sort({ date: -1 }).toArray();
    await client.close();

    return result;
  } catch (error) {
    throw new Error(`Error on the fetch, ${error}`);
  }
};
