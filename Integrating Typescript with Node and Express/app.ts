import express from 'express';

import bodyParser from 'body-parser';

import todosRoute from './routes/todos'

import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(todosRoute);

app.listen(3000);