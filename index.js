import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Mati",
  //     email: "mati@gmail.com",
  //   },
  // })
  // console.log(newUser)

  //const users = await prisma.user.findMany()

  const user = await prisma.user.findFirst({
    where: {
      //name: "Mati",

      OR: [
        {
          id: 55,
        },
        { email: "mati@gmail.com" },
      ],
    },
  })

  console.log(user)
}

main()
