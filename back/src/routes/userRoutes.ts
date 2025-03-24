import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  try {
    const result = await createUser(req, res);
    res.status(201).json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const result = await getAllUsers(req, res);
    res.status(200).json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

export { userRouter };
