import examService from "../services/examService.js";

class ExamController {
  async getAll(req, res) {
    try {
      const exams = await examService.getAll();
      res.json(exams);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }

  async getOne(req, res) {
    try {
      const exam = await examService.getOne(req.params.id);
      res.json(exam);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async create(req, res) {
    try {
      const exam = {
        title: req.body.title,
        description: req.body.description,
        active: req.body.active,
        sections: req.body.sections,
        class: req.body.class,
      };
      const created = await examService.create(exam);
      res.json(created);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await examService.delete(req.params.id);
      res.json(deleted);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }

  async update(req, res) {
    try {
      const exam = {
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description,
        active: req.body.active,
        sections: req.body.sections,
        class: req.body.class
      };
      const updated = await examService.update(exam);
      res.json(updated);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
}

export default new ExamController();
