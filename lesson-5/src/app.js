import express from 'express';

const app = express();

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/students/:id', async (req, res) => {
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


app.use((req, res, next) => {
    res.status(404).send('Not Found');
})

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Internal Server Error');
});

export default app;