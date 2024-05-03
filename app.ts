import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ message: 'working' });
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

export default app;
