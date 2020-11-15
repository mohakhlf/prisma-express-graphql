import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log: ['query']})
prisma.$connect()


export default {


    main: async () => {
        const post = await prisma.post.update({
            where: {id: 1},
            data: {published: true},
        })
        console.log(post)
    },

    post: async () => {
        const post = await prisma.post
            .findMany({
            include: {
                author: true
            }
        })
        return post
    },

    user: async () => {
        const user = await prisma.user
            .findMany()
        return user
    },

    profile: async () => {
        const profile = await prisma.profile
            .findMany()
        return profile

    }

}
