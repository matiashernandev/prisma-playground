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

  /* -------------------------------------------------------------------------- */

  //const users = await prisma.user.findMany()

  /* -------------------------------------------------------------------------- */

  // const user = await prisma.user.findFirst({
  //   where: {
  //     //name: "Mati",
  //     OR: [
  //       {
  //         id: 55,
  //       },
  //       { email: "mati@gmail.com" },
  //     ],
  //   },
  // })

  /* -------------------------------------------------------------------------- */

  //   try {
  //     const user = await prisma.user.delete({
  //       where: {
  //         id: 2,
  //       },
  //     })
  //     console.log(user)
  //   } catch (error) {
  //     if (error.code === "P2025") {
  //       console.log("usuario no encontrado")
  //     }
  //     console.error(error.message)
  //   }

  /* -------------------------------------------------------------------------- */

  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: 5,
  //   },
  //   data: {
  //     lastname: "Biaggio",
  //   },
  // })

  /* ---------------------------- UPDATE OR CREATE ---------------------------- */

  const user = await prisma.user.upsert({
    where: {
      id: 55,
    },
    create: { email: "julia@gmail2.com", name: "Julia" },
    update: { lastname: "Das Biaggio2" },
  })

  console.log(user)
}

main()
