const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
    // Clean existing data
    await prisma.user.deleteMany();

    // Create 5 users
    const users = [];
    for (let i = 0; i < 5; i++) {
        const user = await prisma.user.create({
            data: {
                email: faker.internet.email(),
                name: faker.person.fullName(),
                role: i === 0 ? 'ADMIN' : i === 1 ? 'EDITOR' : 'USER',
            },
        });
        users.push(user);
        console.log(`Created user: ${user.name}`);
    }

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });