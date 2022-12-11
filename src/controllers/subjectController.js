
import subjectService from "../services/subjectService.js";
class SubjectController {
  async getSubjects(req, res) {
    try {
      const subjects = await subjectService.get();
      res.json(subjects);
    } catch (error) {
      
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async getOneSubject(req, res) {
    try {
      const subject = await subjectService.getOne(req.params.id)
      res.json(subject);
    } catch (error) {
      
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async createSubject(req, res) {
    try {
      const createdSubject = await subjectService.create({
        name: req.body.name,
      });
      res.json(createdSubject);
    } catch (error) {
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async updateSubject(req, res) {
    try {
      const subject = {
        _id: req.body._id,
        name: req.body.name,
      };
      if(subject.name.length<3) {
        throw new Error("Название предмета меньше 3 симбола!!!")
      }
      const updatedSubject = await subjectService.update(
        req.body._id,
        subject
      );
      res.json(updatedSubject);
    } catch (error) {
     
      res.status(500).json({
        massege: "error",
      });
    }
  }
  async deleteSubject(req, res) {
    try {
      const subject = await subjectService.delete(req.params.id);
      res.json(subject);
    } catch (error) {
    
      res.status(500).json({
        massege: "error",
      });
    }
  }
}

export default new SubjectController();
