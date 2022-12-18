import Questions from "../models/Questions.js";

class QuestionService {
  async getAll() {
    const questions = await Questions.find();
    return questions;
  }
  async getQuestions(subject_id) {
    const questions = await Questions.find({ subject: subject_id });
    return questions;
  }
  async getCount(subject_id) {
    const count = await Questions.countDocuments({ subject: subject_id });
    return count;
  }
  async create(question) {
    const created = Questions.create(question);
    return created;
  }

  async delete(id) {
    const deleted = Questions.findByIdAndDelete(id);
    return deleted;
  }
  async update(question) {
    const updated = Questions.findByIdAndUpdate(question._id, question, {
      new: true,
    });
    return updated;
  }
}

export default new QuestionService();