import Exams from "../models/Exams.js";

class ExamService {
  async getAll() {
    const exams = await Exams.find();
    return exams;
  }
  async create(exam) {
    const created = Exams.create(exam);
    return created;
  }
  async getOne(id) {
    const exam = await Exams.findById(id);
    return exam;
  }
  async delete(id) {
    const deleted = await Exams.findByIdAndDelete(id);
    return deleted;
  }
  async update(exam) {
    const updated = await Exams.findByIdAndUpdate(exam.id, exam, {new:true});
    return exam;
  }
}
export default new ExamService();