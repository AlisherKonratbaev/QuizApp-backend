import { Schema, SchemaType, model } from "mongoose";

// simple exam view ---------!
// const exam1 = {
//   title:"Экзамены для олимпиады",
//   description: "Описание экзамина, условия и другие",
//   active: true,
//   class: 11,
//   sections: [
//     {subject: "subject_id", questionCount: 20, time: 45},
//     {subject: "subject_id", questionCount: 10, time: 20}
//   ]
// }

const Exams = new Schema(
  {
    title: { type: String, unique: true, require: true },
    description: { type: String },
    active: { type: Boolean, default: false },
    sections: [
      {
        subject: { type: Schema.Types.ObjectId, ref: "Subjects" },
        questionCount: Number,
        time: Number
      }
    ],
    class: { type: Number, require: true, min: 1, max: 11 },
  },
  {
    timestamps: true,
  }
);

export default model("Exams", Exams);
