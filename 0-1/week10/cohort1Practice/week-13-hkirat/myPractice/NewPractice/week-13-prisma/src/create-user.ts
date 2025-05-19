import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "msanthoshh@gmail.com",
      name: "MSANTHOSH"
    }
  });
  console.log("User created:", user);
}

main()
  .then(async () => {
    console.log("ok u are done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });