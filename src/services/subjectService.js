import Subjects from "../models/Subjects.js";

class SubjecService {
  async get() {
    const subjects = await Subjects.find();
    return subjects;
  }
  async getOne(id) {
    const subject = await Subjects.findById(id);
    return subject;
  }
  async create(subject) {
    const createdSubject = await Subjects.create(subject);
    return createdSubject;
  }
  async update(id, subject) {
    const updatedSubject = await Subjects.findByIdAndUpdate(id, subject, {
      new: true,
    });
    return updatedSubject;
  }
  async delete(id) {
    const subject = await Subjects.findByIdAndDelete(id);
    return subject;
  }
}

export default new SubjecService();
