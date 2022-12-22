import { body } from "express-validator";

export const loginValidations = [
  body("login", "login должен быть минимум 3 символа")
    .trim()
    .isLength({ min: 3 }),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
];

export const subjectValidations = [
  body("name", "Название должен быть минимум 3, максимум 50 символов")
    .trim()
    .isLength({ min: 3, max: 50 }),
];

export const questionValidations = [
  body("question", "Вопрос должен быть минимум 3 символа")
    .trim()
    .isLength({ min: 3 }),
  body("subject", "Предмет не оприделен").notEmpty(),
  body("variants", "Неверные варианты").isArray({min:4, max:6}),
  body("class", "Класс не оприделен").isNumeric().notEmpty(),
  body("answer", "Ответ не оприделен").notEmpty(),
];

export const examValidations = [
  body("title", "Неверное название").trim().not().notEmpty().isLength({ min: 3 }),
  body("description").optional().trim(),
  body("active", "Статус не оприделен").isBoolean().notEmpty(),
  body("sections", "Неверное настроки предмета").isArray(),
  body("sections.*.subject", "Неверный предмет").notEmpty(),
  body("sections.*.questionCount", "Количество вопросов не верны").isNumeric(),
  body("sections.*.time", "время не определен").isNumeric(),
  body("class", "Неверный класс").isNumeric({ min: 1, max: 11 }),
];