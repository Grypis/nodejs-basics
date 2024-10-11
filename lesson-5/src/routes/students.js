import express from 'express';

import {Student} from '../models/student.js'; 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);

    if (student === null) {
      return res.status(404).send('Student not found');
    }

    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;