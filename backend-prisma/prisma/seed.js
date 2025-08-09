const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
    // Clean existing data
    await prisma.activity.deleteMany();
    await prisma.music.deleteMany();
    // await prisma.profile.deleteMany();
    await prisma.user.deleteMany();

    // Create 5 users
    const users = [];
    for (let i = 0; i < 5; i++) {
        const user = await prisma.user.create({
            data: {
                name: faker.person.fullName(),
                username: faker.internet.username(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                password: faker.internet.password(),
                birthdate: faker.date.birthdate(),
                registeredAt: faker.date.past(),
                role: i === 0 ? 'ADMIN' : i === 1 ? 'EDITOR' : 'USER',
            },
        });
        users.push(user);
        console.log(`Created user: ${user.username}`);
    }

    // for (const user of users) {
    //     const profile = await prisma.profile.create({
    //         data: {
    //             bio: faker.person.bio(),
    //             avatar: faker.image.avatar(),
    //             userId: user.id,
    //             // userId: user.userId,
    //         },
    //     });
    //     console.log(`Profile created for user: ${user.username}, Bio: ${profile.bio}`);
    // }

    for (const user of users) {
        const music = await prisma.music.create({
            data: {
                artist: faker.music.artist(),
                userId: user.id,
            },
        });
        console.log(`Music created for user ${user.username}: ${music.artist}`);
    }

    for (const user of users) {
        const activityCount = faker.number.int({ min: 2, max: 4 });
        for (let i = 0; i < activityCount; i++) {
            const activity = await prisma.activity.create({
                data: {
                    title: faker.lorem.sentence(),
                    content: faker.lorem.paragraphs(3),
                    userId: user.id,
                },
            });
            console.log(`Activity created for ${user.id}: ${activity.title}`);
        }
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