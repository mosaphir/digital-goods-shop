const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Product 1", description: "Description for product 1", price: 10.0 },
      { name: "Product 2", description: "Description for product 2", price: 20.0 },
      { name: "Product 3", description: "Description for product 3", price: 30.0 }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
