import type { Request, Response } from "express";
import { prisma } from "../prisma/client";
import bcrypt from "bcrypt"; // para hashear senhas, por exemplo
import { userService } from "../services/userService";

export async function createUser(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { name, email, password } = req.body;

    const newUser = await userService.createUser(name, email, password);

    return res.status(201).json(newUser);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
    return res.status(500).json({ error: "Unhandled error" });
  }
}

export async function getAllUsers(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const users = await userService.getAllUsers();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar usuários" });
  }
}
