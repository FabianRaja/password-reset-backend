import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

async function dbConnection(){
    try {
        const client=new MongoClient(process.env.connectionString);
        await client.connect();
        console.log("Database connected");
        return client;
    } catch (error) {
        console.log("Error connecting database")
    }
}

export const client=await dbConnection();