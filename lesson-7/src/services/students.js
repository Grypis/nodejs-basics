import { Student } from '../models/student.js';

export function getStudents() {
  return Student.find();
}

export function getStudent(studentId) {
  return Student.findById(studentId);
}

export function createStudent(student) {
  return Student.create(student);
}

export function deleteStudent(studentId) {
  return Student.findByIdAndDelete(studentId);
}

export function updateStudent(studentId, Student) {
  return Student.findByIdAndUpdate(studentId, Student, { new: true });
}

export function changeStudentDuty(studentId, onDuty) {
  return Student.findByIdAndUpdate(studentId, { onDuty }, { new: true });
}
