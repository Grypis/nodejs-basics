import express from 'express';

const app = express();

app.get("/", (request, response) => {
    response.send("Hello, World!");
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});