import { Router } from "express";

import { UserRepository } from "../repositories/UserRepository";

const usersRoutes = Router();
const userRepository = new UserRepository();

usersRoutes.post("/", (req, res) => {
  const { email, password } = req.body;

  const userAlreadyExists = userRepository.findByMail(email);

  if (userAlreadyExists) {
    return res.status(400).json({ error: "User already exists!" });
  }

  userRepository.create({ email, password });

  return res.status(201).send();
});

usersRoutes.get("/", (req, res) => {
  const all = userRepository.list();

  return res.status(200).json(all);
});

export { usersRoutes };
