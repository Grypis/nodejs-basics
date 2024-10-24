import 'dotenv/config';

import express from 'express';

import {initDBConnection } from "./db.js";

import { Student } from "./models/student.js";

const app = express();

app.get("/students", async (req, res) => {
    
    try {
        const students = await Student.find();

        res.json(students);

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
    
    
});

app.get("/students/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findById(id)
        
        if (student === null) {
           return res.status(404).send("Student not found");
            
         }

        console.log(student);
        

        res.end()
    } catch (error) {
        console.error(error);
         res.status(500).send("Internal Server Error");
    }
     
 })

async function bootstrap() {
    try {
        await initDBConnection()

        app.listen(8080, () => {
    console.log("Server was connected by 8080");
    
});
    } catch (error) {
        console.error(error);
        
    }
}

bootstrap();