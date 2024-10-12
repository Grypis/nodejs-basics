import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  getStudentController,
  getStudentsController,
  createStudentController,
  deleteStudentController,
  updateStudentController,
  updateStudentDutyController,
} from '../controllers/students.js';

const router = express.Router();
const jsonParser = express.json({
  type: 'application/json',
});

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:id', ctrlWrapper(getStudentController));

router.post('/', jsonParser, ctrlWrapper(createStudentController));

router.delete('/:id', ctrlWrapper(deleteStudentController));

router.put('/:id', jsonParser, ctrlWrapper(updateStudentController));

router.patch('/:id/duty', jsonParser, ctrlWrapper(updateStudentDutyController));

export default router;
