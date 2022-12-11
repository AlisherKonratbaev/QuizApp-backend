import Questions from "../models/Questions.js";

class QuestionService {
  async getAll() {
    const questions = await Questions.find();
    return questions
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
    const updated = Questions.findByIdAndUpdate(question._id, question, {new:true});
    return updated;
  }
}

export default new QuestionService();