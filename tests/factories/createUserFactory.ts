import bcrypt from "bcrypt";
import { prisma } from "../../src/database";
import { CreateUserData } from "../../src/repositories/userRepository.js";

export default async function createUserFactory(body : CreateUserData) {
  const hashedPassword = bcrypt.hashSync(body.password, 12);

  await prisma.user.create({
    data: { ...body, password: hashedPassword }
  })
  const user = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  });
  return user;
}