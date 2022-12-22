import Role from "../models/Role.js";
import User from "../models/User.js";
import authService from "../services/authService.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
  async login(req, res) {
    try {
      const { login, password } = req.body;

      const user = await authService.findUser(login);
      if (!user) {
        return res.status(204).json("Пользователь не найден");
      }
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return res.status(400).json("Неверный пароль или логин");
      }

      const token = jwt.sign(
        { id: user._id, login: user.login },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      return res.json(token);
    } catch (e) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async register(req, res) {
    try {
      const { login, password } = req.body;

      const candidate = await authService.findUser(login);
      if (candidate) {
        return res.status(400).json("Пользователь с таким логином имееться");
      }
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      const role = await authService.findRole("user");
      const newUser = await authService.createUser(
        login,
        hashPassword,
        role.value
      );
      if (newUser)
        return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
}

export default new AuthController();
