import { NextRequest,NextResponse } from "next/server";


import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

export async function POST(request: Request) {

  const body = await request.json();
  prisma.user.create({
    data: {
      username: body.username,
      password: body.password
    }
  });
  console.log("body", body);

  return NextResponse.json({
    message: "User created successfully",
    user: body,
  });
}


export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany({});
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
