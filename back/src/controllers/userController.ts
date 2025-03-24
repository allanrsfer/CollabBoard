import type { Request, Response } from "express";
import { prisma } from "../prisma/client";
import bcrypt from "bcrypt"; // para hashear senhas, por exemplo

export async function createUser(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { name, email, password } = req.body;

    // Verificar se já existe um usuário com esse email
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar usuário" });
  }
}

export async function getAllUsers(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar usuários" });
  }
}
