import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Ensure a user exists
  const user = await prisma.user.create({
    data: {
      email: "example@gmail.com",
      name: "Example User"
    }
  });

  // Then create a post for that user
  const post = await prisma.post.create({
    data: {
      title: "Post title",
      author: {
        connect: {
          id: user.id // dynamic, based on inserted user
        }
      }
    }
  });

  console.log("Post created:", post);
}

main()
  .then(async () => {
    console.log("✅ Done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
