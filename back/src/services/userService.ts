import { prisma } from "../prisma/client";
import bcrypt from "bcrypt";

export const userService = {
  async createUser(name: string, email: string, password: string) {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error("Email já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return newUser;
  },

  async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  },
};
