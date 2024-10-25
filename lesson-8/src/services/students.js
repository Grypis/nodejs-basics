import { Student } from '../models/student.js';

export async function getStudents({ page, perPage, sortBy, sortOrder }) {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const [total, students] = await Promise.all(
    Student.countDocuments(),
    Student.find().skip(skip).limit(perPage),
  );

  const totalPages = Math.ceil(total / perPage);

  return {
    students,
    page,
    perPage,
    totalItems: total,
    hasNextPage: totalPages - page > 0,
    hasPreviousPage: page > 1,
  };
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
