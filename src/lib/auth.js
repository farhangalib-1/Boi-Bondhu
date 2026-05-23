import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4'])
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let cachedClient = null;
let cachedDb = null;

async function connectDB() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const client = new MongoClient(process.env.AUTH_URI, {
      maxPoolSize: 5,
      minPoolSize: 1,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      retryWrites: true,
    });

    await client.connect();
    cachedClient = client;
    cachedDb = client.db("boi-bondhu");
    
    // Verify connection
    await cachedDb.admin().ping();
    console.log("✓ MongoDB connected successfully");
    
    return { client: cachedClient, db: cachedDb };
  } catch (error) {
    console.error("✗ MongoDB connection failed:", error.message);
    throw error;
  }
}

// Create auth instance with connection handling
async function initAuth() {
  const { db, client } = await connectDB();
  
  return betterAuth({
    database: mongodbAdapter(db, {
      client
    }),
    emailAndPassword: { 
      enabled: true, 
    },
    socialProviders: {
      google: { 
        clientId: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
      },
    },
    baseURL: process.env.BETTER_AUTH_URL || `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/auth`,
  });
}

export const auth = await initAuth();