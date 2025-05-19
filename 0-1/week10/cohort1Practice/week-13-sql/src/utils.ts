import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://postgres.gcpkkgvorbxfjcycqffk:[Rockmadhav@123]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres");
    await client.connect();
    return client;
}