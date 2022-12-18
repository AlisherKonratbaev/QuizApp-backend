import questionService from "../services/questionService.js";
class QuestionController {
  async getAll(req, res) {
    try {
      const questions = await questionService.getAll();
      res.json(questions);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async getQuestions(req, res) {
    try {
      const questions = await questionService.getQuestions(
        req.params.subject_id
      );
      res.json(questions);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async getCount(req, res) {
    try {
      const count = await questionService.getCount(req.params.subject_id);
      res.json({count});
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async createQuestion(req, res) {
    try {
      const newQuestion = {
        question: req.body.question,
        subject: req.body.subject,
        variants: req.body.variants,
        class: req.body.class,
        answer: req.body.answer,
      };
      const created = await questionService.create(newQuestion);
      res.json(created);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async deleteQuestion(req, res) {
    try {
      const deleted = await questionService.delete(req.params.id);
      res.json(deleted);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }

  async updateQuestion(req, res) {
    try {
      const question = {
        _id: req.body._id,
        question: req.body.question,
        subject: req.body.subject,
        variants: req.body.variants,
        class: req.body.class,
        answer: req.body.answer,
      };
      const updated = await questionService.update(question);
      res.json(updated);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
}

export default new QuestionController();
