import express from 'express';
import todoRoute from './routes/todos'
import bodyParser from 'body-parser';

const app=express();
app.use(bodyParser.json());
app.use(todoRoute);

app.listen(4000);