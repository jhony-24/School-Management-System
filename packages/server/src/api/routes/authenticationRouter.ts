import { Router } from 'express';

const app = Router();

app.get('/', () => console.log('Hello World'));

export default app;
