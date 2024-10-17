import createHttpError from 'http-errors';

import {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent,
  changeStudentDuty,
} from '../services/students.js';

export async function getStudentsController(req, res) {
  const students = await getStudents();

  res.json({
    status: 200,
    message: 'Student recieved successfully',
    data: students,
  });
}

export async function getStudentController(req, res) {
  const { id } = req.params;

  const student = await getStudent(id);

  if (student === null) {
    // throw createHttpError(404, "Student not found");
    // throw createHttpError[404]('Student not found');
    throw new createHttpError.NotFound('Student not found');
  }

  res.json({
    status: 200,
    message: 'Student retrieved successfully',
    data: student,
  });
}

export async function createStudentController(req, res) {
  if (
    typeof req.body.name === 'undefined' ||
    typeof req.body.gender === 'undefined' ||
    typeof req.body.age === 'undefined'
  ) {
    throw createHttpError(400, 'Request body is not valid');
  }

  if (['male', 'female'].includes(req.body.gender) !== true) {
    throw createHttpError(400, 'Gender is not valid');
  }

  const student = {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    onDuty: req.body.onDuty,
  };

  const result = await createStudent(student);
  res.status(201).json({
    status: 201,
    message: 'Student created succsessfully',
    data: result,
  });
}

export async function deleteStudentController(req, res) {
  const { id } = req.params;

  const result = await deleteStudent(id);

  if (result === null) {
    throw createHttpError(404, 'Student not found');
  }

  res.send(200).json({
    status: 200,
    message: 'Student deleted successfully',
    data: result,
  });
}

export async function updateStudentController(req, res) {
  const { id } = req.params;

  const student = {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    onDuty: req.body.onDuty,
  };

  const result = await updateStudent(id, student);

  if (result === null) {
    throw createHttpError(404, 'Student not found');
  }

  res.json({
    status: 200,
    message: 'Student updated successfully',
    data: result,
  });
}

export async function changeStudentDutyController(req, res) {
  const { id } = req.params;
  const { onDuty } = req.body;

  const result = await changeStudentDuty(id, onDuty);

  if (result === null) {
    throw createHttpError(404, 'Student not found');
  }

  res.json({
    status: 200,
    message: 'Student duty changed successfully',
    data: result,
  });
}
