"use server";

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export interface StoreProps {
  _id: string;
  name: string;
  address: {
    addr1: string;
    town: string;
    county: string;
    postcode: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface ResultProps {
  _id: string;
  stores: StoreProps[];
}

export async function getAllStores(): Promise<ResultProps[]> {
  const client = await clientPromise;
  const collection = client.db("uniformbank").collection("stores");
  return await collection
    .aggregate<ResultProps>([
      {
        // sort alphabetically
        $sort: {
          name: 1,
        },
      },
    ])
    .toArray();
}

export async function getStore(id: number) {
  const client = await clientPromise;
  const collection = client.db("uniformbank").collection("stores");
  const result = await collection.findOne({ storeId: id });
  return result;
}

export async function addStore(data: any): Promise<{ message: string }> {
  console.log(data);
  try {
    const client = await clientPromise;
    const collection = client.db("uniformbank").collection("stores");
    const result = await collection.insertOne(data);
    return { message: "Success!" };
  } catch (e) {
    return { message: "There was an error." };
  }
}
