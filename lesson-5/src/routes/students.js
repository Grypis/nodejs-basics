import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { getStudentController, getStudentsController} from '../controllers/students.js';

const router = express.Router();

router.get('/', ctrlWrapper(getStudentsController));



router.get('/:id', ctrlWrapper(getStudentController));

export default router;